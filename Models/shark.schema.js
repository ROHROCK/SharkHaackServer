//MongoDB Schema
const mongoose = require('mongoose');

var SharkSchema = {
    // _id :  String,
    sharkType:  String,
    glbLink:String ,
    wikilink:  String,
    bodyLength: Number, 
} 

var Shark = mongoose.model('shark', SharkSchema);

module.exports = { Shark };