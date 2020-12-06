//Importing required dependency
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000
require('dotenv').config();

//importing controller
var SharkController = require('./Controller/sharkController.js');

//MongoDB URL
const uri = process.env.URI;

const app = express();

app.use(bodyParser.json());
app.use(cors());
//Listening to port 9000
app.listen('9000', function () {
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


// get the temp url link to access the s3 object
// function getTempLink(s3,contentType){
//     var params = {Bucket: 'sharkhack', Key: 'Megalodon.glb'};
//     s3.getSignedUrl('putObject', params, function (err, url) {
//         if(err){
//             console.log("Something went wrong while fetching the URL");
//             console.log(err.stack);
//             return "ERR";
//         }
//         console.log('Your generated pre-signed URL is', url);
//         return url
//     });
// }