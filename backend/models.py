from sqlalchemy import Column, String, Text, Date, ForeignKey, Boolean, Integer  # Add Integer here
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)  # Primary key
    username = Column(String(100), unique=True, index=True)
    password_hash = Column(String, nullable=True)  # Add this to store the hashed password

    # Relationship to achievements (One-to-Many relationship)
    public_achievements = relationship("Achievement", back_populates="user", overlaps="private_achievements")
    private_achievements = relationship("Achievement", back_populates="user", overlaps="public_achievements")


class Achievement(Base):
    __tablename__ = "achievements"

    id = Column(Integer, primary_key=True, index=True)  # Define primary key as Integer
    user_username = Column(String(100), ForeignKey("users.username"), nullable=False)  # Foreign key to User table
    title = Column(String(100), nullable=False)
    description = Column(Text)
    file_url = Column(String(255))
    visibility = Column(Boolean, default=True)  # True for public, False for private
    date_awarded = Column(Date)

    # Relationship back to user (Many-to-One relationship)
    user = relationship("User", back_populates="public_achievements")
