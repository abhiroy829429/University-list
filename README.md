# University Landing Pages Project

This project contains two single-page landing pages for private universities with integrated lead forms, APIs, and Pipedream workflow integration.

![Project Screenshot](assets/images/screenshot-home.png)

## 📁 Project Structure

```
University Landing Page/
├── assets/             # Project assets and images
│   └── images/         # Screenshots, logos, etc.
├── config/              # Configuration files
│   └── index.js        # App configuration (port, env vars)
├── controllers/         # Route controllers (business logic)
│   ├── universityController.js  # University data handlers
│   └── leadController.js        # Lead form submission handlers
├── data/               # Mock data
│   └── universityData.js       # University data (overviews, courses, facilities, placements)
├── docs/               # Documentation
│   ├── images/         # Documentation images
│   ├── DEPLOYMENT.md
│   ├── GET_WEBHOOK_URL.md
│   ├── PIPEDREAM_SETUP.md
│   ├── QUICKSTART.md
│   └── README.md
├── middleware/         # Express middleware
│   └── index.js        # Middleware setup (CORS, body parsing, static files)
├── public/             # Frontend files (served as static)
│   ├── css/
│   │   ├── style.css
│   │   └── tailwind.css
│   ├── js/
│   │   └── common.js
│   ├── index.html
│   ├── university-1.html
│   └── university-2.html
├── routes/             # Express routes
│   ├── api.js          # API endpoints
│   └── pages.js        # Page routes (HTML files)
├── src/                # Source files
│   └── input.css       # Tailwind CSS source
├── .env                # Environment variables (not in git)
├── .gitignore
├── package.json
├── postcss.config.js
├── server.js           # Main server file
└── tailwind.config.js
```

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```bash
   cp .env.example .env
   # Edit .env and add your Pipedream webhook URL
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Visit:**
   - Home: http://localhost:5001/
   - University 1: http://localhost:5001/university-1
   - University 2: http://localhost:5001/university-2

## 📚 Documentation

All documentation is in the `docs/` folder:
- `QUICKSTART.md` - Quick start guide
- `PIPEDREAM_SETUP.md` - Pipedream integration setup
- `GET_WEBHOOK_URL.md` - How to get your webhook URL
- `DEPLOYMENT.md` - Deployment guide

## 🏗️ Architecture

### Controllers
- **universityController.js**: Handles all university data endpoints
- **leadController.js**: Handles form submissions and Pipedream integration

### Routes
- **api.js**: All API endpoints (`/api/*`)
- **pages.js**: Page routes for serving HTML files

### Data
- **universityData.js**: Centralized mock data for both universities

### Config
- **config/index.js**: Centralized configuration management

### Middleware
- **middleware/index.js**: Express middleware setup

## 🔧 Development

```bash
# Development with auto-reload
npm run dev

# Build CSS
npm run build:css
```

## 📝 Features

- ✅ Two complete landing pages
- ✅ Responsive design (mobile & desktop)
- ✅ Lead form with validation
- ✅ Pipedream API integration
- ✅ Working APIs (simple and nested JSON)
- ✅ Modal for course fees
- ✅ Success/error messages without page refresh

## 📸 Screenshots


-->

## 🖼️ Adding Images to README

To add images to your README:

1. **Place images in `assets/images/` folder:**
   ```
   assets/images/
   ├── screenshot-home.png
   ├── screenshot-university-1.png
   ├── screenshot-university-2.png
   └── logo.png
   ```

2. **Reference them in README using:**
   ```markdown
   ![Alt Text](assets/images/screenshot-home.png)
   ![University 1 Landing Page](assets/images/screenshot-university-1.png)
   ```

3. **For documentation images, use `docs/images/`:**
   ```markdown
   ![Deployment Guide](docs/images/deployment-screenshot.png)
   ```

## 📄 License

ISC

