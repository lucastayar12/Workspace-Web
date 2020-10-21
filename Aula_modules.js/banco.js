const Sequelize = require('sequelize');
const sequelize = new Sequelize('Alunos', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
})

/*sequelize.authenticate().then(() => {
    console.log("Conexão sucesso")
}).catch((err) => {
    console.log("Erro " + err)
})*/

const Alunos = sequelize.define('Alunos', {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
});

Alunos.sync({ force: true }).then(() => {
    console.log("Tabela Criada");

    return Alunos.create({
        nome: 'Lucas Tayar',
        idade: 19
    })
}).then(() => {
    return Alunos.findAll();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})