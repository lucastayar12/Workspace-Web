module.exports = (app) => {
    const controller = require('./controller');

    //NEW POST BRO !!
    app.post('/posts', controller.create)

    //SEARCHING FOR THE POST BRO !!
    app.get('/posts', controller.findAll)

    //ROTA PRA UPDATE DE UM POST POR ID
    app.put('/posts', controller.update)

    //Um post por ID
    app.delete('/posts', controller.remove)
}