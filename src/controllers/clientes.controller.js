const Cliente = require('../models/cliente.model');

module.exports = {
    async list(req,res){
        const clientes = await Cliente.find();

        return res.json({clientes});
    },

    async create(req,res){
        try { 
            const {nome_cliente, email_cliente, telefone_cliente} = req.body;
            if (await Cliente.findOne({email_cliente})){
                return res.status(400).json({erro: 'ERRO! Email já cadastrado!'});
            }
            await Cliente.create({nome_cliente, email_cliente, telefone_cliente});
            return res.status(201).json({message:'SUCESSO! Cliente cadastrado!'});
        } catch (err){
            return res.status(400).json({erro: 'ERRO! Cliente NÃO cadastrado.'})
        }
    },

    async details(req,res){
        try { 
            const {_id} = req.params;
            const cliente = await Cliente.findById(_id).populate('enderecos');
            res.json({cliente});
        } catch (err){
            return res.status(400).json({erro: 'ERRO! Cliente NÃO encontrado.'})
        }
    },

    async delete(req,res){
        try { 
            const {_id} = req.params;
            const cliente = await Cliente.findByIdAndDelete(_id);
            res.json({message:'SUCESSO! Cliente deletado!'});
        } catch (err){
            return res.status(400).json({erro: 'ERRO! Cliente NÃO deletado.'})
        }
    },

    async update(req,res){
        try { 
            const {_id, nome_cliente, email_cliente, telefone_cliente} = req.body;

            const data = {nome_cliente, email_cliente, telefone_cliente};

            const cliente = await Cliente.findByIdAndUpdate({_id}, data, {new:true})

            res.json({message:'SUCESSO! Cliente atualizado!'});
        } catch (err){
            return res.status(400).json({erro: 'ERRO! Cliente NÃO atualizado.'})
        }
    },
}
