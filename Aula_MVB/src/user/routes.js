module.exports = (app) => {
    const controller = require('./controller');

    //NEW USER BRO !!
    app.post('/usuarios', controller.create)

    //SEARCHING FOR THE USER BRO !!
    app.get('/usuarios', controller.findAll)
}