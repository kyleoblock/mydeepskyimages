const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  camera: {
    type: String,
    required: false,
  },
  telescope: {
    type: String,
    required: false,
  },
  mount: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
