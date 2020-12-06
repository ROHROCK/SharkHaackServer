//Importing required dependency
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors');
const port = process.env.PORT || 4000
require('dotenv').config();

//importing controller
var SharkController = require('./Controller/sharkController.js');

//MongoDB URL
const uri = "mongodb+srv://sharkhack:root@sharkhackcluster.rdu0d.mongodb.net/sharkhackdb?retryWrites=true&w=majority";

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    next();
});

app.use(bodyParser.json());
// app.use(cors());

//Listening to port 9000
app.listen(port, function () {
    console.log(port);
    console.log("Server Started at port ",port); 
});

//MongoDB Connection
mongoose.connect(uri, {useUnifiedTopology:true,useNewUrlParser:true },(err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

app.use('/shark', SharkController)

// app.get('/', (req, res) => {
//     res.send("Hello");
// });

// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/jokes/random', (req, res) => {
//   request(
//     { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));