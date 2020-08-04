const express = require('express');
const path = require('path');

const basic = require('./routes/main');

const app = express();

app.use(express.json());

//views engine and template location
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));


//routes
app.use(basic);

module.exports = app;
