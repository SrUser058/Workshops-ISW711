const express = require('express');
const app = express();
// database connection
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb+srv://Eduardo:AAcCFet9ViGd9Czy@testdatabase.e8b2cjg.mongodb.net/utn", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const {
  teacherPatch,
  teacherPost,
  teacherGet,
  teacherDelete
} = require("./controllers/teacherController.js");

const {
  coursePost, courseGet
} = require("./controllers/courseController.js");

const {
  universityPost, universityGet
} = require("./controllers/universityController.js");

const {
  majorGet, majorPost, majorPut, majorDelete
} = require("./controllers/majorController.js");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));


// listen to the task request
app.get("/api/teachers", teacherGet);
app.post("/api/teachers", teacherPost);
app.patch("/api/teachers", teacherPatch);
app.put("/api/teachers", teacherPatch);
app.delete("/api/teachers", teacherDelete);

// course
app.get("/api/courses", courseGet);
app.post("/api/courses", coursePost);

app.get("/api/university", universityGet);
app.post("/api/university", universityPost);

app.get("/api/major/:id", majorGet);
app.get("/api/major", majorGet);
app.post("/api/major", majorPost);
app.patch("/api/major", majorPut);
app.patch("/api/major/:id", majorPut);
app.delete("/api/major", majorDelete);
app.delete("/api/major/:id", majorDelete);

app.listen(3001, () => console.log(`Example app listening on port 3001!`))
