const Sequelize = require('sequelize');
const sequelize = new Sequelize('Alunos', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(() => {
    console.log("Conexão sucesso")
}).catch((err) => {
    console.log("Erro " + err)
})