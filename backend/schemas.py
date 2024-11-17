from pydantic import BaseModel
from typing import List, Optional
from datetime import date

# Base Schema for Achievement (shared attributes)
class AchievementBase(BaseModel):
    title: str
    description: Optional[str] = None
    file_url: Optional[str] = None
    visibility: bool = True
    date_awarded: Optional[date] = None

# Schema for creating a new Achievement (no id or user relation needed)
class AchievementCreate(AchievementBase):
    pass

# Schema for returning an Achievement in responses
class Achievement(AchievementBase):
    id: int
    user_username: str

    class Config:
        orm_mode = True

# Base Schema for User (shared attributes)
class UserBase(BaseModel):
    username: str

# Schema for creating a new User
class UserCreate(UserBase):
    password: str

# Schema for returning a User in responses, including achievements
class User(UserBase):
    id: int
    public_achievements: List[Achievement] = []
    private_achievements: List[Achievement] = []

    class Config:
        orm_mode = True
