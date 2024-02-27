const express = require('express');
//const cors = require("cors");

//Diferencia de usar bodyparse a solo express? 
//Que depende de la version de express no parsea el body.
//const bodyParser = require("body-parser");
const app = express();

app.use(express.json());

// ¿Es mejor usar funtion o =>?
app.get('/hello/:messange', (req,res) => {
    if(req.params.messange) {
        res.send(`Hello ${req.params.messange}`)
    }
    res.send(`Hello World!`)    
})

app.get('/', (req,res) => {
    res.send("Conected to the Eduardo's Api")
})

app.post('/user', (req, res) => {
    if(!req.body.name && !req.body.lastname){
        res.send("Parametros no enviados")
    }
    res.send(`Usuario ${req.body.name + req.body.lastname} se conecto existosamente`)
})

app.listen(3001, () => console.log(`Service listening on port 3001!`))