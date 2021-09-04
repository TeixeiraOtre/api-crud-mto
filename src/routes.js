const express = require('express');

const routes = express.Router();

const Cliente = require('./controllers/clientes.controller')
const Endereco = require('./controllers/enderecos.controller')

// Rotas de Clientes
routes.post('/api/clientes',Cliente.create);
routes.get('/api/clientes',Cliente.list);
routes.get('/api/clientes.details/:_id',Cliente.details);
routes.delete('/api/clientes/:_id',Cliente.delete);
routes.put('/api/clientes',Cliente.update);

// Rotas de Endereços
routes.post('/api/enderecos',Endereco.create);
routes.get('/api/enderecos.details/:_id',Endereco.details);
routes.delete('/api/enderecos/:_id',Endereco.delete);
routes.put('/api/enderecos',Endereco.update);

module.exports = routes;
