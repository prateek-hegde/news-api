const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://neo:neo123@ds113648.mlab.com:13648/neo', {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected!');
});

module.exports = db;
