// Main server file
const express = require('express');
const path = require('path');
const config = require('./config');
const setupMiddleware = require('./middleware');
const apiRoutes = require('./routes/api');
const pageRoutes = require('./routes/pages');

const app = express();

// Setup middleware
setupMiddleware(app);

// API routes
app.use('/api', apiRoutes);

// Page routes
app.use('/', pageRoutes);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  console.log(`Visit http://localhost:${config.port}/university-1 for University 1`);
  console.log(`Visit http://localhost:${config.port}/university-2 for University 2`);
});
