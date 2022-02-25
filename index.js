// importar o express
const express = require('express');

//crar um servidor
const app = express();

//Dfenindo a porta do servidor

const port = 8080;

//Definido a pasta public

app.use(express.static(__dirname + '/public'));

//Definido a rota


app.get('/daweb', (req, res)=>{
    res.sendFile(__dirname + '/index.html')});

// rodar o seridor local
app.listen(port, ()=>{console.log('Server started on port 8080, access through the link http://localhost:8080/daweb')});
