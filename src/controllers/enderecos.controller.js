const Endereco = require('../models/endereco.model');
const Cliente = require('../models/cliente.model');

module.exports = {

    async create(req,res){
        try { 
            const {cep, logradouro, numero_endereco, complemento, bairro, localidade, uf, cliente_id} = req.body;
            if (await Endereco.findOne({cep, numero_endereco})){
                return res.status(400).json({erro: 'ERRO! Endereço já cadastrado!'});
            }
            const cliente = await Cliente.findById(cliente_id)
            if (!cliente){
                return res.status(400).json({erro: 'ERRO! Cliente NÃO cadastrado!'});
            }
            const endereco = await Endereco.create({cep, logradouro, numero_endereco, complemento, bairro, localidade, uf});
            cliente.enderecos.push(endereco)
            await cliente.save()
            return res.status(201).json({message:'SUCESSO! Endereço cadastrado!'});
        } catch (err){
            return res.status(400).json({erro: 'ERRO! Endereço NÃO cadastrado.'})
        }
    },

    async details(req,res){
        try { 
            const {_id} = req.params;
            const endereco = await Endereco.findById(_id);
            res.json({endereco});
        } catch (err){
            return res.status(400).json({erro: 'ERRO! Endereço NÃO encontrado.'})
        }
    },

    async delete(req,res){
        try { 
            const {_id} = req.params;
            const endereco = await Endereco.findByIdAndDelete(_id);
            res.json({message:'SUCESSO! Endereço deletado!'});
        } catch (err){
            return res.status(400).json({erro: 'ERRO! Endereço NÃO deletado.'})
        }
    },

    async update(req,res){
        try { 
            const {_id, cep, logradouro, numero_endereco, complemento, bairro, localidade, uf} = req.body;

            const data = {cep, logradouro, numero_endereco, complemento, bairro, localidade, uf};

            const endereco = await Endereco.findByIdAndUpdate({_id}, data, {new:true})

            res.json({message:'SUCESSO! Endereço atualizado!'});
        } catch (err){
            return res.status(400).json({erro: 'ERRO! Endereço NÃO atualizado.'})
        }
    },
}
