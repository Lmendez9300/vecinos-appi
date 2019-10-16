const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RegistroSchema = new Schema({
    nombre: {
        type:String,
        required:true
    },
   direccion:{
       type:String,
       required:true
   },
   telefono:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   tarifa:{
       type:[String]
   }
  });

  const Registro = mongoose.model('Registro',RegistroSchema)
  module.exports=Registro;