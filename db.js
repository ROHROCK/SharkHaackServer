const mongoose = require('mongoose');

const uri = "mongodb+srv://sharkhack:root@sharkhackcluster.rdu0d.mongodb.net/sharkhackdb?retryWrites=true&w=majority";

mongoose.connect(uri, {useUnifiedTopology:true },(err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;