from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional

class MessageCreate(BaseModel):
    """
    Schema for creating a new message (contact form submission).
    Validates incoming data.
    """
    name: str = Field(..., min_length=1, max_length=100, description="Full name of the sender")
    email: EmailStr = Field(..., description="Email address of the sender")
    message: str = Field(..., min_length=1, description="Message content")

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john.doe@example.com",
                "message": "Hello! I'd like to discuss a project opportunity."
            }
        }

class MessageResponse(BaseModel):
    """
    Schema for message response.
    Returns message data with ID and timestamp.
    """
    id: int
    name: str
    email: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

class MessageSubmitResponse(BaseModel):
    """
    Schema for successful form submission response.
    """
    success: bool
    message: str
    data: Optional[MessageResponse] = None
