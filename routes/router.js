const express = require('express');
var router = express();
const News = require('../schema/news');
var {ObjectID} = require('mongodb');

router.get('/all-news', async (req, res) => {
  var results = await News.find({}, {"content": 0});
  return res.json({
    news: results
  });
});

router.get('/news/:id', async (req, res) => {
  var id = ObjectID(req.params.id);
  var results = await News.findById({_id: id});

  let array = [];
  array.push(results);

  return res.json({
    news: array
  });
})

module.exports = router;
