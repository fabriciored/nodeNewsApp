const express = require('express');
const consign = require('consign');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');


consign()
    .include('src/routes')
    .then('config/dbConnection.js')
    .into(app);


module.exports = app;