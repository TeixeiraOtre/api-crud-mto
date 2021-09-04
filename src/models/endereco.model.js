const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    cep:String,
    logradouro:String,
    numero_endereco: String,
    complemento:String,
    bairro: String,
    localidade: String,
    uf: String
},{
    timestamps:true
});

const Enderecos = mongoose.model('Enderecos',DataSchema);
module.exports = Enderecos;