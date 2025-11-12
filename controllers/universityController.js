// University data controllers
const { overviews, courses, facilities, placements } = require('../data/universityData');

const getOverview = (req, res) => {
  const { id } = req.params;
  res.json(overviews[id] || overviews['1']);
};

const getCourses = (req, res) => {
  const { id } = req.params;
  res.json(courses[id] || courses['1']);
};

const getFacilities = (req, res) => {
  const { id } = req.params;
  res.json({ facilities: facilities[id] || facilities['1'] });
};

const getPlacements = (req, res) => {
  const { id } = req.params;
  res.json(placements[id] || placements['1']);
};

module.exports = {
  getOverview,
  getCourses,
  getFacilities,
  getPlacements
};

