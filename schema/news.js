var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
  uid:{
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

var News = mongoose.model('News', NewsSchema);
module.exports = News;
