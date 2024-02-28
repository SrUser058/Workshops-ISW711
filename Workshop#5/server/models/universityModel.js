const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const university = new Schema({
    name: {type: String},
    located: {type: String},
    majors: {
        type: mongoose.ObjectId,
        ref: 'Major'
    },
    typeUniversity: {type:String} 
})

module.exports = mongoose.model('universities',university)