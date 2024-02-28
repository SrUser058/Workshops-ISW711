const Major = require("../models/majorModel");

// Create a new University

const majorPost = async (req, res) => {
    let major = new Major(req.body);
    await major.save()
        .then(course => {
            res.status(201);
            res.header({
                'location': `/api/major/?id=${major.id}`
            })
            res.json(major);
        })
        .catch(err => {
            res.status(422);
            console.log("Error on saving the major");
            res.json({ error: `A error while saving the major` });
        })
};

const majorGet = (req, res) => {
    if (req.params && req.params.id) {
        Major.findById(req.params.id).populate('course')
            .then((major) => {
                res.json(major);
            })
            .catch(err => {
                res.status(404);
                console.log('Error getting the major');
                res.json({ error: "The major doesnt exist" });
            })
    } else {
        Major.find().populate('major')
            .then(major => {
                res.json(major);
            })
            .catch(err => {
                res.status(422);
                res.json({ "error": err })
            });
    }
};

const majorPut = async (req, res) => {
    let major = new Major(req.body);
    await Major.findByIdAndUpdate(req.params.id, major)
        .then(answer => {
            teacher.title = req.body.title
            teacher.detail = req.body.detail
            res.send(answer);
        })
        .catch(err => {
            res.status(422);
            console.log('Error update the major');
            res.json({ error: "The major doesnt change" });
        });
};

const majorDelete = async (req, res) => {
    if(req.params && req.params.id){
        await Major.findOneAndDelete({_id:req.params.id})
        .then(answer => {
            res.send(answer);
        })
        .catch(err=>{
            res.status(422);
            console.log('Error on delete the major');
            res.json({ error: "The major wasnt deleted" });
        })
    }
}

module.exports = {
    majorGet, majorPost, majorPut, majorDelete
}