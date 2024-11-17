import sqlalchemy  # Add this line to import the sqlalchemy module
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# PostgreSQL Database URL format
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:z2530@localhost:5432/user_db"

# Create the SQLAlchemy engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create a configured "SessionLocal" class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create a base class for the SQLAlchemy models
Base = declarative_base()
