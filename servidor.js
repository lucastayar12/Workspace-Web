const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

var directoryServidor = path.dirname(__dirname);
let directory = directoryServidor.substring(0, directoryServidor.lastIndexOf('\\'));

const PUBPATH = directory + '\\public'
const SRCPATH = directory + '\\src'

app.use('/public', express.static(PUBPATH));
app.use('/static', express.static(SRCPATH));

app.use(express.urlencoded({
  extended: true
}))

app.use('/public', express.static(PUBPATH));
app.use('/static', express.static(SRCPATH));

app.get('/', (req, res)=>{
  res.sendFile(SRCPATH + '/views/index.html');
});

app.get('/aluno', (req, res)=>{
  res.sendFile(SRCPATH + '/views/aluno.html');
});

app.get('/eu', (req, res)=>{
  res.sendFile(SRCPATH + '/views/eu.html');
});

app.get('/duvida', (req, res)=>{
  res.sendFile(SRCPATH + '/views/duvida.html');
});

app.get('/confirmacao', (req, res)=>{
  const usrEmail = req.query.usrEmail;
  const usrDesc = req.query.usrDesc;
  res.send('<h1>Confirmação</h1><p>Dados enviados com sucesso! Sua dúvida será respondida no email preenchido no formulario.</p><p>Descrição: '+ usrDesc + '</p><p>Email:' + usrEmail + '</p>');
});

app.get(PUBPATH + "/json/avaliacao1.json", (req, res) => {

  fs.readFile(PUBPATH + "/json/avaliacao1.json", "utf8", function(err, data){
    if(err) throw err;
  
    const JSONalunos = JSON.parse(data);
    console.log(JSONalunos);
    res.send(JSONalunos);
  });

});

app.listen(3000, ()=>{console.log('Servidor rodando!');})
