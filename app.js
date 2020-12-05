const express = require('express');
const mongoose = require('./db.js');
const app = express();

app.listen('9000', function () {
    console.log("Server Started at port 9000"); 
});