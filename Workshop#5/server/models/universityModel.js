const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const university = new Schema({
    name: {type: String},
    located: {type: String},
    /*course: {
        type: mongoose.ObjectId,
        ref: 'Course'
    },*/
    typeUniversity: {type:String} 
})

module.exports = mongoose.model('universities',university)