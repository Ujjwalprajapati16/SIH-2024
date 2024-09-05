
const express = require('express');
const router = express.Router();
const Disaster = require('../models/disasterInfo.models.js');

// Route to get all disaster information
router.get('/disasters', async (req, res) => {
  try {
    const disasters = await Disaster.find();
    res.json(disasters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching disasters', error });
  }
});

// Route to get a specific disaster by ID
router.get('/disasters/:id', async (req, res) => {
  try {
    const disaster = await Disaster.findById(req.params.id);
    if (!disaster) {
      return res.status(404).json({ message: 'Disaster not found' });
    }
    res.json(disaster);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching disaster', error });
  }
});

module.exports = router;
