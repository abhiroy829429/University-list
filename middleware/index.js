// Middleware configuration
const cors = require('cors');
const express = require('express');

const setupMiddleware = (app) => {
  // CORS middleware
  app.use(cors());
  
  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Static files middleware
  app.use(express.static('public'));
};

module.exports = setupMiddleware;

