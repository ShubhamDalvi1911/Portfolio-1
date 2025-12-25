from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from .. import crud, schemas
from ..database import get_db

router = APIRouter(
    prefix="/api",
    tags=["contact"]
)

@router.post("/contact", response_model=schemas.MessageSubmitResponse, status_code=status.HTTP_201_CREATED)
async def submit_contact_form(
    message: schemas.MessageCreate,
    # db: Session = Depends(get_db)  # Commented out - no database
):
    """
    Submit a contact form message.
    
    This endpoint receives contact form data, validates it, and returns success.
    Database storage is currently disabled.
    Equivalent to Django's submit_form view.
    """
    try:
        # Database storage commented out - just validate and return success
        # db_message = crud.create_message(db=db, message=message)
        
        # Log the message to console instead of database
        print(f"\n=== Contact Form Submission ===")
        print(f"Name: {message.name}")
        print(f"Email: {message.email}")
        print(f"Message: {message.message}")
        print(f"================================\n")
        
        return schemas.MessageSubmitResponse(
            success=True,
            message="Your message has been sent successfully. We will get back to you shortly.",
            # data=schemas.MessageResponse.from_orm(db_message)
            data=None
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while processing your request: {str(e)}"
        )

# Database-dependent endpoints commented out
# Uncomment these when you want to use database storage

# @router.get("/messages", response_model=List[schemas.MessageResponse])
# async def get_all_messages(
#     skip: int = 0,
#     limit: int = 100,
#     db: Session = Depends(get_db)
# ):
#     """
#     Retrieve all contact messages.
#     
#     This endpoint is useful for an admin panel to view all submissions.
#     """
#     messages = crud.get_messages(db=db, skip=skip, limit=limit)
#     return messages

# @router.get("/messages/{message_id}", response_model=schemas.MessageResponse)
# async def get_message(
#     message_id: int,
#     db: Session = Depends(get_db)
# ):
#     """
#     Retrieve a specific message by ID.
#     """
#     db_message = crud.get_message_by_id(db=db, message_id=message_id)
#     if db_message is None:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="Message not found"
#         )
#     return db_message
