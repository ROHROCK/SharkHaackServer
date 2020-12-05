// Controller
const express = require('express');
var router = express.Router();

var { Shark } = require('../Models/shark.schema');

//localhost:9000/shark
//Get API
router.get('/', (req, res) => {
    Shark.find((err, docs) => {
        console.log("shark finding");
        if (!err) { res.send(docs);}
        else { console.log('Error in Retriving Employees :' + err); }
    });
});

//Post APi
router.post('/', (req, res) => {
    var shark = new Shark ({
        sharkType: req.body.sharkType,
        glbLink: req.body.glbLink,
        wikilink: req.body.wikilink,
        bodyLength: req.body.bodyLength,
    });
    shark.save  ((err, doc) => {
        if (!err) { res.send(doc); }
        else { res.send(err); console.log('Error in Employee Save :' + err); }
    });
});

module.exports = router;