const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    creater_id:String,
    created_time:String,
    debate_topic: String,
    debate_description: String,
    debate_creater_side: String,
    debate_opposite_side: String,
    debate_publicity:String,
    media:String
  })
);

module.exports = Post;
