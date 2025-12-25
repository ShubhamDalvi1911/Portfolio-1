# FastAPI Portfolio Backend

Backend API for Satyam Kashid's portfolio website built with FastAPI.

## Features

- **RESTful API** for contact form submissions
- **SQLAlchemy ORM** for database operations
- **Pydantic validation** for request/response data
- **CORS enabled** for React frontend
- **Auto-generated API documentation** (Swagger UI)
- **SQLite database** for data persistence

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application entry point
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic schemas
│   ├── database.py          # Database configuration
│   ├── crud.py              # Database operations
│   └── routers/
│       ├── __init__.py
│       └── contact.py       # Contact form API routes
├── static/                  # Static files (images)
├── requirements.txt
├── .env.example
└── README.md
```

## Installation

1. **Create a virtual environment:**
   ```bash
   python -m venv venv
   ```

2. **Activate the virtual environment:**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   copy .env.example .env
   ```

## Running the Server

Start the development server:

```bash
uvicorn app.main:app --reload
```

The API will be available at:
- **API:** http://localhost:8000
- **Swagger UI:** http://localhost:8000/api/docs
- **ReDoc:** http://localhost:8000/api/redoc

## API Endpoints

### Health Check
- **GET** `/` - Root endpoint
- **GET** `/api/health` - Health check

### Contact Form
- **POST** `/api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello! I'd like to discuss a project."
  }
  ```

- **GET** `/api/messages` - Get all messages (admin)
- **GET** `/api/messages/{id}` - Get specific message

## Database

The application uses SQLite database (`portfolio.db`) which is automatically created on first run.

### Models

**Message:**
- `id` (Integer, Primary Key)
- `name` (String, max 100 chars)
- `email` (String, max 255 chars)
- `message` (Text)
- `created_at` (DateTime)

## Development

### Running Tests
```bash
pytest
```

### Code Formatting
```bash
black app/
```

### Type Checking
```bash
mypy app/
```

## Production Deployment

For production deployment, use a production-ready server:

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Or use Gunicorn with Uvicorn workers:

```bash
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker
```

## License

MIT License
