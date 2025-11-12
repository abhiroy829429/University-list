// Vercel serverless function entry point
// This wraps the Express app for Vercel deployment

const express = require('express');
const path = require('path');
const config = require('../config');
const setupMiddleware = require('../middleware');
const apiRoutes = require('../routes/api');
const pageRoutes = require('../routes/pages');

const app = express();

// Setup middleware
setupMiddleware(app);

// API routes
app.use('/api', apiRoutes);

// Page routes
app.use('/', pageRoutes);

// Export for Vercel
module.exports = app;

