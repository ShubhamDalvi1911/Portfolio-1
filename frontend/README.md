# Portfolio Frontend (React + Vite)

Modern React frontend for Satyam Kashid's portfolio website built with Vite.

## Features

- **React 18** with modern hooks and functional components
- **Vite** for lightning-fast development and optimized builds
- **Responsive Design** matching the original Django template
- **API Integration** with FastAPI backend
- **Form Validation** and error handling
- **Smooth Scrolling** navigation
- **Font Awesome Icons** for visual elements
- **Google Fonts** (Poppins) for typography

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   ├── Home.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── Resume.jsx           # Resume section
│   │   ├── Skills.jsx           # Skills grid
│   │   ├── Projects.jsx         # Projects showcase
│   │   ├── Certifications.jsx   # Certifications
│   │   └── Contact.jsx          # Contact form
│   ├── services/
│   │   └── api.js               # API communication
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables (optional):**
   Create a `.env` file:
   ```
   VITE_API_URL=http://localhost:8000
   ```

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at **http://localhost:5173**

### Production Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Components

### Sidebar
- Fixed navigation panel
- Profile photo
- Social media links
- Navigation menu with smooth scrolling

### Home
- Hero section with background image
- Professional title and introduction
- Call-to-action button

### About
- Professional background
- Technical expertise
- Career journey
- Future goals

### Resume
- Education timeline
- Technical skills
- Work experience
- Projects
- Highlights
- Resume download link

### Skills
- Grid layout of skill categories
- Hover effects
- Responsive design

### Projects
- Project cards with images
- Descriptions and links
- Hover animations

### Certifications
- Certification cards
- Issuer information
- Verification links

### Contact
- Contact form with validation
- API integration
- Success/error notifications
- Alternative contact methods

## API Integration

The frontend communicates with the FastAPI backend through the `api.js` service:

- **POST /api/contact** - Submit contact form
- Automatic error handling
- Loading states
- Success/error notifications

## Styling

- **Global Styles**: `index.css`
- **Component Styles**: Individual CSS files for each component
- **Color Scheme**: Black background with yellow/gold accents
- **Typography**: Poppins font family
- **Animations**: Hover effects, transitions, and fade-ins

## Responsive Design

The application is fully responsive with breakpoints for:
- Desktop (> 768px)
- Tablet (768px)
- Mobile (< 768px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Hot Module Replacement (HMR)

Vite provides instant HMR for React components during development.

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run type-check
```

## Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deploy to Vercel

```bash
vercel deploy
```

### Deploy to Netlify

```bash
netlify deploy --prod
```

## Environment Variables

- `VITE_API_URL` - Backend API URL (default: http://localhost:8000)

## License

MIT License
