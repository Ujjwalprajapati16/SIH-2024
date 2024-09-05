const mongoose = require('mongoose');

const disasterInfoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        default: null,
        trim: true
    },
    year: {
        type: Number,
        required: true
    },
    disaster_info: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const DisasterInfo = mongoose.model('DisasterInfo', disasterInfoSchema);



module.exports = DisasterInfo;
