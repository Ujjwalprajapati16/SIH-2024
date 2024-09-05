const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  _unit_id: {
    type: String,
    required: true,
  },
  _golden: {
    type: String,
    required: true,
  },
  _unit_state: {
    type: String,
    required: true,
  },
  _trusted_judgments: {
    type: Number,
  },
  _last_judgment_at: {
    type: String,
    default: "",
  },
  choose_one: {
    type: String,
  },
  choose_one_confidence: {
    type: Number,
  },
  choose_one_gold: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    required: true,
  },
  tweetid: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    default: "",
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
