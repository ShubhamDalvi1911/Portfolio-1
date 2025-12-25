from sqlalchemy.orm import Session
from . import models, schemas

def create_message(db: Session, message: schemas.MessageCreate):
    """
    Create a new message in the database.
    
    Args:
        db: Database session
        message: Message data from request
    
    Returns:
        Created message object
    """
    db_message = models.Message(
        name=message.name,
        email=message.email,
        message=message.message
    )
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message

def get_messages(db: Session, skip: int = 0, limit: int = 100):
    """
    Retrieve all messages from the database.
    
    Args:
        db: Database session
        skip: Number of records to skip (pagination)
        limit: Maximum number of records to return
    
    Returns:
        List of message objects
    """
    return db.query(models.Message).offset(skip).limit(limit).all()

def get_message_by_id(db: Session, message_id: int):
    """
    Retrieve a specific message by ID.
    
    Args:
        db: Database session
        message_id: ID of the message to retrieve
    
    Returns:
        Message object or None
    """
    return db.query(models.Message).filter(models.Message.id == message_id).first()
