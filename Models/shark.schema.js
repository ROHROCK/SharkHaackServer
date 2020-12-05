const mongoose = require('mongoose');

var SharkSchema = {
    sharkType: { type: String },
    glbLink: { type: String },
    wikilink: { type: String },
    bodyLength: {type: Number}
} 

var Shark = mongoose.model('shark_data', SharkSchema);

module.exports = { Shark };