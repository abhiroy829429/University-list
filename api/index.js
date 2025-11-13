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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  });
});

// Export for Vercel
module.exports = app;

