// Page routes (serving HTML files)
const express = require('express');
const path = require('path');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// University 1 landing page
router.get('/university-1', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'university-1.html'));
});

// University 2 landing page
router.get('/university-2', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'university-2.html'));
});

module.exports = router;

