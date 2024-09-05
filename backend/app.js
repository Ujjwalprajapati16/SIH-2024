const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/tweet', require('./routes/tweet.js'));
app.use('/api/disaster', require('./routes/disaster.js'));

app.get('/', (req, res) => {
    res.send('API is running...');
})


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
