from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from .database import SessionLocal, Base
from .models import User

app = FastAPI()

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Pydantic model to validate incoming data
class UserCreate(BaseModel):
    username: str
    password: str

# Utility function to hash passwords
def get_password_hash(password):
    return pwd_context.hash(password)

# Dependency to get a SQLAlchemy session
def get_db():
    db = SessionLocal()  # Assuming you've set up the session earlier
    try:
        yield db
    finally:
        db.close()

@app.post("/register/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # Hash the user's password
    hashed_password = get_password_hash(user.password)
    db_user = User(username=user.username, hashed_password=hashed_password)
    
    # Add user to the database
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"username": db_user.username}

# Login endpoint example
@app.post("/login/")
def login(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == user.username).first()
    if not db_user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    # Verify the password
    if not pwd_context.verify(user.password, db_user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    return {"message": "Login successful"}

# ------------------- MAIN ------------------------
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)