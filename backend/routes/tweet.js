const express = require('express');
const router = express.Router();
const Tweet = require('../models/tweet.model.js');

// Route to get all tweets
router.get('/tweets', async (req, res) => {
    try {
        const tweets = await Tweet.find();
        res.json(tweets);
    } catch (err) {
        console.error('Error fetching tweets:', err);
        res.status(500).json({ error: 'Failed to retrieve tweets' });
    }
});

module.exports = router;
