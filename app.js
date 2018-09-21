const express = require('express');
var app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const db = require('./services/database');


//import routes
var routes = require('./routes/router');
app.use('/api', routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
