# Quick Start Guide

Get your University Landing Pages up and running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Pipedream (Optional for Testing)

1. Go to [https://pipedream.com](https://pipedream.com)
2. Create a free account
3. Create a new HTTP/Webhook workflow
4. Copy the webhook URL

## 3. Configure Environment

Create a `.env` file:

```bash
cp .env.example .env
```

Edit `.env` and add your Pipedream URL:

```
PIPEDREAM_WEBHOOK_URL=https://your-pipedream-url.m.pipedream.net
```

**Note**: If you don't have a Pipedream URL yet, you can still run the project. The form will show an error message, but you can test all other features.

## 4. Start the Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

## 5. Open in Browser

- Home: http://localhost:5001/
- University 1: http://localhost:5001/university-1
- University 2: http://localhost:5001/university-2

## Features to Test

✅ **Landing Pages**: Both university pages with all sections
✅ **Course Fees Modal**: Click "Check Course-wise Fees" button
✅ **Lead Form**: Fill out and submit the application form
✅ **Responsive Design**: Resize browser or test on mobile
✅ **APIs**: All endpoints return JSON data
✅ **Success/Error Messages**: Submit form to see messages

## API Endpoints to Test

- Overview: http://localhost:5001/api/university/1/overview
- Courses: http://localhost:5001/api/university/1/courses
- Facilities: http://localhost:5001/api/university/1/facilities
- Placements: http://localhost:5001/api/university/1/placements

Replace `1` with `2` for the second university.

## Troubleshooting

**Port already in use?**
- Change `PORT` in `.env` file
- Or kill the process using port 5001

**Form not submitting?**
- Check that `PIPEDREAM_WEBHOOK_URL` is set in `.env`
- Verify the URL is correct in Pipedream dashboard

**APIs not working?**
- Make sure server is running
- Check browser console for errors
- Verify you're using the correct university ID (1 or 2)

## Next Steps

- Deploy to production (see DEPLOYMENT.md)
- Customize university information
- Add your own Pipedream workflow logic
- Replace mock data with database queries

Happy coding! 🚀

