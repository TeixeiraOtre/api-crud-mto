const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO, {
    useUnifiedTopology:true,
    useNewUrlParser:true
    
}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB CONECTADO com sucesso!')
    }
})

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get('/home', function(req, res){
    res.json({message:'Hello World'});
});

app.use(routes);

app.listen(port, function(){
    console.log(`Server runing on port ${port}`)
});
