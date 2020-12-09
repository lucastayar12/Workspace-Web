const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./src/configs/sequelize');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));



db.sequelize.sync({ alter: true }).then(() => {
    console.log("Base de dados criada com sucesso")
})



require('./src/user/routes')(app)
require('./src/posts/routes')(app)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/views/index.html");
})


var server = app.listen(3000, () => {
    console.log('Servidor está rodando na porta ' + server.address().port + ' no host ' + server.address().address);
})
