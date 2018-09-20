const express = require('express');
var app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const db = require('./services/database');

//
// mongoose.Promise = global.Promise;
//
// mongoose.connect('mongodb://neo:neo123@ds113648.mlab.com:13648/neo');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('connected!');
// });

//import routes
var routes = require('./routes/router');
app.use('/api', routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
