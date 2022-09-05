const mongoose = require("mongoose");

const appsModel = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  external_id: {
    type: String,
  },
  rating: {
    type: Number,
  },
  install_count: {
    type: Number,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  publisher: {
    type: String,
  },
  icon: {
    type: String,
  },
  min_age: {
    type: Number,
  },
});

module.exports = mongoose.model("apps", appsModel);
