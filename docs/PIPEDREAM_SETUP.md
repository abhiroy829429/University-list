# Pipedream Setup & Verification Guide

## Step 1: Create a Pipedream Account

1. Go to [https://pipedream.com](https://pipedream.com)
2. Sign up for a free account (no credit card required)
3. Verify your email if prompted

## Step 2: Create a Webhook Workflow

1. Once logged in, click **"New"** in the top right
2. Select **"HTTP / Webhook"**
3. You'll see a webhook URL like: `https://xxxxx.m.pipedream.net`
4. **Copy this URL** - you'll need it in the next step

## Step 3: Configure Your Project

1. Open the `.env` file in your project root
2. Add or update the `PIPEDREAM_WEBHOOK_URL`:
   ```
   PIPEDREAM_WEBHOOK_URL=https://your-actual-webhook-url.m.pipedream.net
   ```
3. Replace `your-actual-webhook-url` with the URL you copied from Pipedream
4. Save the file

## Step 4: Restart Your Server

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm start
```

## Step 5: Verify the Integration

### Method 1: Test Form Submission

1. Go to your landing page: http://localhost:5001/university-1
2. Fill out the form with test data
3. Submit the form
4. Check your **server console** - you should see logs about the submission
5. Go to your **Pipedream dashboard** → Click on your workflow
6. You should see the incoming request with all the form data!

### Method 2: Check Pipedream Dashboard

1. Go to [https://pipedream.com/workflows](https://pipedream.com/workflows)
2. Click on your webhook workflow
3. You'll see a list of all incoming requests
4. Click on any request to see:
   - Headers
   - Body (your form data)
   - Timestamp
   - Response

### Method 3: Check Server Logs

When a form is submitted, check your terminal where the server is running. You should see:

```
=== FORM SUBMISSION TO PIPEDREAM ===
URL: https://xxxxx.m.pipedream.net
Data: {
  "fullName": "John Doe",
  "email": "john@example.com",
  ...
}
Status: 200 OK
===================================
```

## What Data is Sent?

The following data is sent to Pipedream:

```json
{
  "fullName": "User's full name",
  "email": "user@example.com",
  "phone": "9876543210",
  "state": "Karnataka",
  "courseInterested": "Computer Science Engineering",
  "intakeYear": "2024",
  "consent": true,
  "universityId": "1",
  "submittedAt": "2024-11-13T02:30:00.000Z"
}
```

## Troubleshooting

### Form shows error message
- Check that `PIPEDREAM_WEBHOOK_URL` is set correctly in `.env`
- Make sure you restarted the server after updating `.env`
- Check server logs for error messages

### No data in Pipedream
- Verify the webhook URL is correct
- Check that the workflow is active (not paused)
- Look at server console for any error messages
- Try submitting the form again

### Server shows "Pipedream not configured"
- Make sure `.env` file exists in the project root
- Check that `PIPEDREAM_WEBHOOK_URL` is set (not the placeholder)
- Restart the server after making changes

## Testing Without Pipedream

If you want to test the form without setting up Pipedream:

1. The form will work in "Demo Mode"
2. Data will be logged to the server console
3. You'll see a success message (but data won't be sent to Pipedream)
4. Check your server terminal to see the logged data

## Next Steps with Pipedream

Once you verify data is coming through, you can:

1. **Add actions** to your workflow:
   - Send email notifications
   - Save to Google Sheets
   - Send to Slack/Discord
   - Store in a database
   - Trigger other workflows

2. **Transform data** before sending it elsewhere

3. **Set up filters** to process only certain submissions

For more ideas, check out [Pipedream's documentation](https://pipedream.com/docs)

