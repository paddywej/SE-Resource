from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from backend.database import SessionLocal  # Adjust import based on your structure
from backend.models import User  # Adjust import based on your structure
from fastapi.staticfiles import StaticFiles
from typing import List, Dict

app = FastAPI()

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Pydantic model for user creation
class UserCreate(BaseModel):
    username: str
    password: str

# Dependency to get a SQLAlchemy session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Root route
@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI application!"}

@app.get("/UserCreate/all", response_model=List[UserCreate])
async def get_all_students():
    return list(UserCreate.values())

@app.post("/register/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    hashed_password = pwd_context.hash(user.password)
    db_user = User(username=user.username, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"username": db_user.username}

@app.post("/login/")
def login(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == user.username).first()
    if not db_user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    if not pwd_context.verify(user.password, db_user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return {"message": "Login successful"}

# Optional: Serve a favicon if you have one
app.mount("/static", StaticFiles(directory="."), name="static")

@app.get("/favicon.ico")
async def favicon():
    return StaticFiles(directory=".", path="favicon.ico")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
