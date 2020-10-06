const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Seja Bem vindo <button><a src='./views/sobre.html'>Sobre</a></button>");
});

app.get("/sobre", (req, res) => {
  res.sendFile(__dirname + "/views/sobre.html");
});

app.get("/contato", (req, res) => {
  res.sendFile(__dirname + "/views/contato.html");
});

app.get("/confirmacao", (req, res) => {
  res.sendFile(__dirname + "/views/confirmacao.html");
});

app.listen(3000, () => {
  console.log("Servidor ligado");
});

//Comentario