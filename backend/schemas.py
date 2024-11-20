from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Base schema for File
class FileBase(BaseModel):
    title: str
    file_url: str
    category: str
    year: str
    visibility: bool

# Schema for creating a File (client input)
class FileCreate(FileBase):
    pass

# Schema for returning a File (API response)
class FileResponse(FileBase):
    id: int
    user_id: int
    upload_date: datetime

    class Config:
        orm_mode = True  # Allows Pydantic to work with ORM objects

# Base schema for User
class UserBase(BaseModel):
    username: str

# Schema for creating a User (client input)
class UserCreate(UserBase):
    password: str  # Include password during registration

# Schema for returning a User (API response)
class UserResponse(UserBase):
    id: int
    public_files: List[FileResponse] = []  # Include public files associated with the user
    private_files: List[FileResponse] = []  # Include private files associated with the user

    class Config:
        orm_mode = True  # Allows Pydantic to work with ORM objects

# Schema for Login Request
class LoginRequest(BaseModel):
    id: str  # Student ID
    password: str

# Schema for Password Creation
class PasswordCreate(BaseModel):
    id: str  # Student ID
    password: str
