const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PagosSchema = new Schema({
    periodo:{
        type:String,
        required:true
    },
    fecha_pago:{
        type:String,
        required:true

    },
    nombre: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registro',
        required: true,
    }],
});


const Pagos = mongoose.model('Pagos',RegistroSchema)
module.exports=Pagos;


