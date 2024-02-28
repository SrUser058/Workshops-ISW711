const University = require("../models/universityModel");

// Create a new University

const universityPost = async (req, res) => {
    let university = new University(req.body);
    await university.save()
    .then(course=>{
        res.status(201);
        res.header({
            'location': `/api/university/?id=${university.id}`
        })
        res.json(university);
    })
    .catch( err => {
        res.status(422);
        console.log("Error on saving university");
        res.json({error:`A error while saving university`});
    })
};

const universityGet = (req, res) => {
    if(req.params && req.params.id) {
        University.findById(req.params.id).populate('university')
        .then((university) => {
            res.json(university);
        })
        .catch(err=> {
            res.status(404);
            console.log('Error getting the university');
            res.json({error:"University doesnt exist"});
        })
    }else {
        University.find().populate('university')
        .then( university => {
            res.json(university);
        })
        .catch(err => {
           res.status(422);
            res.json({"error":err}) 
        });
    }
};

module.exports = {
    universityGet, universityPost
}