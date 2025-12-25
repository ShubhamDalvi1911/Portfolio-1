# Portfolio - FastAPI + React

Modern portfolio website for **Satyam Kashid** built with FastAPI backend and React frontend.

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Backend runs at:** http://localhost:8000  
**API Docs:** http://localhost:8000/api/docs

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

**Frontend runs at:** http://localhost:5173

## 📁 Project Structure

```
Portfolio/
├── backend/          # FastAPI backend
├── frontend/         # React frontend
└── README.md
```

## ✨ Features

- ✅ Modern React with Vite
- ✅ FastAPI REST API
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Scroll spy navigation
- ✅ Contact form with validation
- ✅ Auto-generated API documentation

## � Documentation

- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)

## 🎨 Sections

- Home - Hero section
- About - Professional background
- Resume - Education & experience
- Skills - Technical skills
- Projects - Portfolio projects
- Certifications - Professional certifications
- Contact - Contact form

## 🔧 Running Without Database

The backend is configured to run without database storage. Contact form submissions are logged to console.

See [backend/SETUP_NO_DATABASE.md](backend/SETUP_NO_DATABASE.md) for details.

## 👤 Author

**Satyam Kashid**
- LinkedIn: [satyamkashid](https://linkedin.com/in/satyamkashid)
- GitHub: [Satyamkashid](https://github.com/Satyamkashid)
- Email: satyamkashid11@gmail.com

## � License

MIT License
