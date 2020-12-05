const express = require('express');
var router = express.Router();

var { Shark } = require('../Models/shark.schema');

router.get('/', (req, res) => {
    Shark.find((err, docs) => {
        console.log("shark finding");
        if (!err) { res.send(docs); console.log(docs)}
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;