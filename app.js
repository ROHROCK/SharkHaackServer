//Importing required dependency
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
//importing controller
var SharkController = require('./Controller/sharkController.js');

//MongoDB URL
const uri = "mongodb+srv://sharkhack:root@sharkhackcluster.rdu0d.mongodb.net/sharkhackdb?retryWrites=true&w=majority";

const app = express();

app.use(bodyParser.json());

//Listening to port 9000
app.listen(port, function () {
    console.log("Server Started at port 9000"); 
});

//MongoDB Connection
mongoose.connect(uri, {useUnifiedTopology:true,useNewUrlParser:true },(err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

app.use('/shark', SharkController)