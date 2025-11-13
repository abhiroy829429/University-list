// Configuration file
// Load .env only in development (Vercel sets env vars directly)
if (process.env.NODE_ENV !== 'production') {
  try {
    require('dotenv').config();
  } catch (error) {
    // Ignore if dotenv fails (e.g., on Vercel)
    console.warn('Warning: Could not load .env file');
  }
}

module.exports = {
  port: process.env.PORT || process.env.VERCEL_PORT || 5001,
  pipedreamWebhookUrl: process.env.PIPEDREAM_WEBHOOK_URL,
  nodeEnv: process.env.NODE_ENV || 'development'
};

