const mongoose = require('mongoose');


const majorSchema = mongoose.Schema({
    name : {type : String},
    /*courses : {
        type : mongoose.ObjectId,
        ref:'Course'},*/
    duration : {type : Number},
});

module.exports = mongoose.model('Major', majorSchema)