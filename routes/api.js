// API routes
const express = require('express');
const router = express.Router();
const universityController = require('../controllers/universityController');
const leadController = require('../controllers/leadController');

// University data routes
router.get('/university/:id/overview', universityController.getOverview);
router.get('/university/:id/courses', universityController.getCourses);
router.get('/university/:id/facilities', universityController.getFacilities);
router.get('/university/:id/placements', universityController.getPlacements);

// Lead form routes
router.post('/submit-lead', leadController.submitLead);
router.get('/test-pipedream', leadController.testPipedream);

module.exports = router;

