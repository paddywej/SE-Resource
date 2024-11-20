from sqlalchemy import Column, String, Text, DateTime, ForeignKey, Boolean, Integer, LargeBinary
from sqlalchemy.orm import relationship
from datetime import datetime
from .database import Base

# User model
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)  # Primary key
    username = Column(String(100), unique=True, index=True)
    password_hash = Column(String, nullable=True)  # For storing hashed passwords

    # Relationships with File model
    public_files = relationship("File", back_populates="user", overlaps="private_files")
    # Private files relationship (overlapping with public_files)
    private_files = relationship("File", back_populates="user_private", overlaps="public_files")

# File model
class File(Base):
    __tablename__ = 'files'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    file_url = Column(String(500), nullable=False)  # Path to the file
    category = Column(String)
    year = Column(String)
    visibility = Column(Boolean)

    # Relationships with User model (using string references to avoid circular imports)
    user = relationship("User", back_populates="public_files", overlaps="private_files")
    user_private = relationship("User", back_populates="private_files", overlaps="public_files")