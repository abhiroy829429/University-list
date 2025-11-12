# How to Get Your Pipedream Webhook URL

## ❌ Wrong URL Format
The URL you're currently using is **NOT** a webhook URL:
```
https://pipedream.com/@university-list/invite?token=...
```

This is an invite link or workflow page URL, not the webhook endpoint.

## ✅ Correct Webhook URL Format
A Pipedream webhook URL should look like this:
```
https://xxxxx.m.pipedream.net
```

## Step-by-Step: Get Your Webhook URL

### Method 1: Create a New Webhook (Recommended)

1. **Go to Pipedream**: https://pipedream.com
2. **Click "New"** in the top right corner
3. **Select "HTTP / Webhook"**
4. **You'll see a page with your webhook URL** - it will look like:
   ```
   https://abc123def456.m.pipedream.net
   ```
5. **Copy this entire URL** (it should end with `.m.pipedream.net`)
6. **Add it to your `.env` file**:
   ```
   PIPEDREAM_WEBHOOK_URL=https://abc123def456.m.pipedream.net
   ```
7. **Restart your server**

### Method 2: Get URL from Existing Workflow

If you already have a workflow:

1. **Go to your workflow** in Pipedream dashboard
2. **Click on the "HTTP / Webhook" trigger** (the first step)
3. **Look for "Endpoint URL"** or "Webhook URL"
4. **Copy the URL** - it should end with `.m.pipedream.net`
5. **Add it to your `.env` file**

### Method 3: Test Your URL

After adding the URL to `.env`, test it:

1. **Restart your server**: `npm start`
2. **Visit**: http://localhost:5001/api/test-pipedream
3. **You should see**: "Successfully connected to Pipedream!"

## Important Notes

- ✅ Webhook URL format: `https://xxxxx.m.pipedream.net`
- ❌ NOT: `https://pipedream.com/@...`
- ❌ NOT: `https://pipedream.com/workflows/...`
- ❌ NOT: Any URL with `/invite` or `/workflows`

## Quick Fix

1. Open your `.env` file
2. Replace the current `PIPEDREAM_WEBHOOK_URL` with a proper webhook URL
3. The URL should:
   - Start with `https://`
   - Contain a random string
   - End with `.m.pipedream.net`
   - NOT contain `/@` or `/workflows` or `/invite`

Example:
```
PIPEDREAM_WEBHOOK_URL=https://e1234567890abc.m.pipedream.net
```

## Still Having Issues?

If you can't find the webhook URL:
1. Create a **new** HTTP / Webhook workflow
2. Pipedream will automatically generate a webhook URL for you
3. Copy that URL and use it in your `.env` file

