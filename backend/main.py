from fastapi import FastAPI, File as FastAPIFile, UploadFile, Form,Query, HTTPException, Depends
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from pydantic import BaseModel
from .models import User, File 
from .database import SessionLocal
from fastapi.staticfiles import StaticFiles
import os
import logging
from typing import List
from sqlalchemy import or_
from sqlalchemy import and_

# Initialize logging
logging.basicConfig(level=logging.INFO)

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Mount static files for serving uploaded files
app.mount("/static", StaticFiles(directory="uploads"), name="static")

# Utility to hash passwords
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

# Utility to verify passwords
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# Pydantic models
class PasswordCreate(BaseModel):
    id: str  # Student ID
    password: str

class LoginRequest(BaseModel):
    id: str  # Student ID
    password: str

# Dependency to get SQLAlchemy session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/register/")
def register_user(request: PasswordCreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == request.id).first()

    if not user:
        raise HTTPException(status_code=400, detail="ID does not exist.")
    if user.password_hash is not None:
        raise HTTPException(status_code=400, detail="User already has a password.")

    user.password_hash = get_password_hash(request.password)
    db.commit()
    return {"message": "Registration successful"}

@app.post("/login/")
def login_user(request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == request.id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not verify_password(request.password, user.password_hash):
        raise HTTPException(status_code=400, detail="Incorrect password.")

    return {"message": "Login successful"}

@app.post("/{page_name}/upload/")
async def upload_file(
    page_name: str,
    file: UploadFile = FastAPIFile(...),
    visibility: bool = Form(...),
    user_id: int = Form(...),
    db: Session = Depends(get_db),
):
    valid_pages = ["file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8"]
    if page_name not in valid_pages:
        raise HTTPException(status_code=400, detail="Invalid page name")

    user = db.query(User).filter(User.id == str(user_id)).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if page_name in ["file1", "file2", "file3", "file4"]:
        category = "Study Resource"
        year = str(valid_pages.index(page_name) + 1)
    else:
        category = "Project"
        year = str(valid_pages.index(page_name) - 3)

    upload_dir = f"uploads/{page_name}"
    os.makedirs(upload_dir, exist_ok=True)
    file_path = os.path.join(upload_dir, file.filename.replace(" ", "_"))

    try:
        with open(file_path, "wb") as f:
            for chunk in iter(lambda: file.file.read(4096), b""):
                f.write(chunk)
    except Exception as e:
        logging.error(f"Error writing file: {e}")
        raise HTTPException(status_code=500, detail="Error saving file")

    file_url = f"/static/{page_name}/{file.filename.replace(' ', '_')}"
    new_file = File(
        user_id=user_id,
        title=file.filename,
        file_url=file_url,
        category=category,
        year=year,
        visibility=visibility,
    )

    try:
        db.add(new_file)
        db.commit()
        db.refresh(new_file)
    except Exception as e:
        db.rollback()
        logging.error(f"Error saving file to database: {e}")
        raise HTTPException(status_code=500, detail="Error saving file to database")

    return {"message": "File uploaded successfully", "category": category, "year": year, "file_url": file_url}

@app.get("/files/{page_name}/{user_id}")
def get_files_by_page_name(
    page_name: str,
    user_id: str,
    db: Session = Depends(get_db)
):
    valid_pages = ["file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8"]
    if page_name not in valid_pages:
        raise HTTPException(status_code=400, detail="Invalid page name")

    if page_name in ["file1", "file2", "file3", "file4"]:
        category = "Study Resource"
        year = str(valid_pages.index(page_name) + 1)
    else:
        category = "Project"
        year = str(valid_pages.index(page_name) - 3)

    # Corrected filter logic using or_ for public or private (only for the specific user)
    files = db.query(File).filter(
        File.category == category,
        File.year == year,
        or_(
            File.visibility == True,  # Public files
            and_(File.visibility == False, File.user_id == user_id)  # Private files (visible only to the user)
        )
    ).all()

    # Fetch user_id instead of username
    file_list = [{"name": file.title, "url": file.file_url, "visibility": file.visibility, "user_id": file.user_id} for file in files]

    return {"category": category, "year": year, "files": file_list}


@app.delete("/{page_name}/upload/")
async def delete_file(
    page_name: str,
    file_name: str = Query(...),
    db: Session = Depends(get_db)
):
    valid_pages = ["file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8"]
    
    if page_name not in valid_pages:
        raise HTTPException(status_code=400, detail="Invalid page name")

    # Fetch file to delete from the database
    file_to_delete = db.query(File).filter(File.title == file_name).first()
    if not file_to_delete:
        raise HTTPException(status_code=404, detail="File not found")

    # Log information for debugging
    logging.info(f"Attempting to delete file '{file_name}' with visibility {file_to_delete.visibility}.")

    # Proceed with deleting the file from the database (no check for user ownership)
    try:
        db.delete(file_to_delete)
        db.commit()
    except Exception as e:
        db.rollback()
        logging.error(f"Error deleting file from database: {e}")
        raise HTTPException(status_code=500, detail="Error deleting file from database")

    # Remove the actual file from the filesystem
    file_path = os.path.join("uploads", page_name, file_name)
    if os.path.exists(file_path):
        os.remove(file_path)

    return {"message": f"File '{file_name}' deleted successfully."}

@app.get("/download/{file_path:path}")
async def download_file(file_path: str):
    file_full_path = os.path.join("uploads", file_path)

    if os.path.exists(file_full_path):
        return FileResponse(file_full_path, filename=os.path.basename(file_path))
    else:
        raise HTTPException(status_code=404, detail="File not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
