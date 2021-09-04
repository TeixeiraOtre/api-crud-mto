const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_cliente:String,
    telefone_cliente:String,
    email_cliente:String,
    enderecos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Enderecos'
        }
    ]
},{
    timestamps:true
});

const clientes = mongoose.model('Clientes',DataSchema);
module.exports = clientes;
