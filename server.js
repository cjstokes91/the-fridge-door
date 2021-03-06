const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

// api routes before "catch all"
app.use('/api/users', require('./routes/api/users'));
app.use(require('./config/auth'));
// app.use('/api/classrooms', require('./routes/api/classrooms'));
app.use('/api/posts', require('./routes/api/posts'));

// "catch all" route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app listening on port ${port}`);
});