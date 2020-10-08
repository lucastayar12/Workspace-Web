const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/sobre", (req, res) => {
  res.sendFile(__dirname + "/views/sobre.html");
});

app.get("/contato", (req, res) => {
  res.sendFile(__dirname + "/views/contato.html");
});

app.post("/confirmacao", (req, res) => {
  res.send("Obrigado ! " + req.body.nome + " por enviar a seguinte mensagem " + "'" + req.body.mensg +"'" + " do seguinte email " + req.body.mail);

});

app.listen(3000, () => {
  console.log("Servidor ligado");
});

//Comentario