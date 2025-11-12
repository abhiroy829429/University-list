// Configuration file
require('dotenv').config();

module.exports = {
  port: process.env.PORT || process.env.VERCEL_PORT || 5001,
  pipedreamWebhookUrl: process.env.PIPEDREAM_WEBHOOK_URL,
  nodeEnv: process.env.NODE_ENV || 'development'
};

