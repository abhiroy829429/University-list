# University Landing Pages Project

This project contains two single-page landing pages for private universities with integrated lead forms, APIs, and Pipedream workflow integration.

## Features

- ✅ Two complete landing pages for different universities
- ✅ Responsive design (mobile & desktop)
- ✅ Lead form with all required fields
- ✅ Pipedream API integration for form submissions
- ✅ Working APIs (simple and nested JSON responses)
- ✅ Modal for course-wise fees
- ✅ Success/error messages without page refresh
- ✅ Dynamic content loading from APIs

## Project Structure

```
University Landing Page/
├── public/
│   ├── css/
│   │   └── style.css          # Custom styles
│   ├── js/
│   │   └── common.js          # Common JavaScript functions
│   ├── index.html             # Home page with links to both universities
│   ├── university-1.html      # TechVista University landing page
│   └── university-2.html      # Global Excellence University landing page
├── server.js                  # Express server with APIs
├── package.json               # Dependencies
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file from the example:
```bash
cp .env.example .env
```

3. Update the `.env` file with your Pipedream webhook URL:
```
PIPEDREAM_WEBHOOK_URL=https://your-actual-pipedream-url.m.pipedream.net
```

## Setting up Pipedream

1. Go to [Pipedream](https://pipedream.com) and create a free account
2. Create a new workflow
3. Add an HTTP trigger
4. Copy the webhook URL
5. Add it to your `.env` file

## Running the Project

Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5001`

## Accessing the Pages

- Home: `http://localhost:5001/`
- University 1 (TechVista): `http://localhost:5001/university-1`
- University 2 (Global Excellence): `http://localhost:5001/university-2`

## API Endpoints

### Simple JSON APIs

1. **University Overview**
   - GET `/api/university/:id/overview`
   - Returns basic university information

2. **Facilities**
   - GET `/api/university/:id/facilities`
   - Returns list of facilities

3. **Placements**
   - GET `/api/university/:id/placements`
   - Returns placement statistics

### Nested JSON API

1. **Courses with Fees**
   - GET `/api/university/:id/courses`
   - Returns nested JSON with courses, fees, and placement data

## Form Fields

The lead form includes:
- Full Name (required)
- Email (required, validated)
- Phone Number (required, 10-digit India format)
- State (required, dropdown)
- Course Interested (required, dropdown)
- Intake Year (required, dropdown)
- Consent Checkbox (required)

## Features Implementation

### ✅ Responsive Design
- Mobile-first approach using Tailwind CSS
- Breakpoints for mobile, tablet, and desktop
- Touch-friendly buttons and forms

### ✅ Modal for Course Fees
- Clicking "Check Course-wise Fees" opens a modal
- Dynamic fee data loaded from API
- Responsive table display

### ✅ Success/Error Messages
- Non-intrusive alert messages
- No page refresh required
- Auto-dismiss after 5 seconds
- Smooth animations

### ✅ Form Validation
- Client-side validation
- Real-time error messages
- Phone number format validation (Indian 10-digit)
- Email format validation

## Deployment

### For Free Hosting with SSL:

1. **Vercel** (Recommended)
   - Connect your GitHub repository
   - Add environment variables in Vercel dashboard
   - Automatic SSL and deployment

2. **Netlify**
   - Connect repository
   - Build command: `npm install && npm start`
   - Add environment variables

3. **Render**
   - Create a new Web Service
   - Connect repository
   - Add environment variables
   - Automatic SSL

### Environment Variables for Production:
- `PORT`: Server port (usually auto-assigned)
- `PIPEDREAM_WEBHOOK_URL`: Your Pipedream webhook URL

## Testing

1. Test form submission with valid data
2. Test form validation with invalid data
3. Test modal opening and closing
4. Test responsive design on different screen sizes
5. Test API endpoints directly

## Notes

- The Pipedream webhook URL must be configured for form submissions to work
- All APIs return mock data for demonstration
- In production, replace mock data with actual database queries
- The brochure download feature shows an alert (can be replaced with actual PDF download)

## License

ISC

