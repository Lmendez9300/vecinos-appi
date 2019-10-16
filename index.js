var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const PORT= process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Database & Models
require('./database/index.js');
const Registro = require('./models/Registro');

//Alta
app.post('/api/registros/',(req,res)=>{
    const newItem = req.body;
    new Registro(newItem)
    .save()
    .then( item =>{
        res.status(201).send({
            mensaje:"Creado satisfactorimente",
            item,
        });
    })
    .catch(err=>{
        res.send({
            message: "there was an errror creating the item",
            err,
        })
    });
});

//Obtener registros
app.get('/api/registros/', (req, res) => {
    Registro.find()
            .exec()
            .then( registros => {
                res.status(200).send({
                    message: "items list received succesfully",
                    items: registros,
                });
            })
            .catch( err => {
                res.send({
                    message: "there was an error with this query",
                    db_error: err,
                });
            });
});
//Buscar un registro
app.get('/api/registros/:id', (req, res) => {
    Registro.findById(req.params.id)
            .then( registro => {
                res.status(200).send({
                    message: "item received succesfully",
                    items: registro,
                });
            })
            .catch( err => {
                res.send({
                    message: "there was an error with this query",
                    db_error: err,
                });
            });
});
//Eliminar
app.delete('/api/registros/:id', (req, res) => {
    Registro.findByIdAndDelete(req.params.id)
            .then( registro => {
                res.status(204).send({
                    message: "item deleted succesfully",
                    items: registro,
                });
            })
            .catch( err => {
                res.send({
                    message: "there was an error with this query",
                    db_error: err,
                });
            });
});
//Actualizar
app.patch('/api/registros/:id/', (req, res) => {
    const {id} = req.params;
    Registro.findByIdAndUpdate(id,req.body,{new:true}) 
    .then( registro => {
        res.status(201).send({
            message: "item update succesfully",
            items: registro,
        });
    })
    .catch( err => {
        res.send({
            message: "there was an error with this query",
            db_error: err,
        });
    });

});

app.listen(PORT,()=>{console.log("Listening in port" + PORT)});