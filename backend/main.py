from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from .database import SessionLocal
from .models import User
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust as necessary
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Utility to hash passwords
def get_password_hash(password):
    return pwd_context.hash(password)

# Utility to verify passwords
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

class PasswordCreate(BaseModel):
    id: str  # Student ID (Integer)
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

# Register endpoint (same as before)
@app.post("/register/")
def register_user(request: PasswordCreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == request.id).first()

    if not user:
        raise HTTPException(status_code=400, detail="User does not exist.")
    if user.password_hash is not None:
        raise HTTPException(status_code=400, detail="User already has a password.")

    # Update password
    user.password_hash = get_password_hash(request.password)
    db.commit()
    return {"message": "Registration successful"}

# Login endpoint
@app.post("/login/")
def login_user(request: LoginRequest, db: Session = Depends(get_db)):
    # Fetch user by ID
    user = db.query(User).filter(User.id == request.id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Check if the password is correct
    if not verify_password(request.password, user.password_hash):
        raise HTTPException(status_code=400, detail="Incorrect password.")

    return {"message": "Login successful"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
