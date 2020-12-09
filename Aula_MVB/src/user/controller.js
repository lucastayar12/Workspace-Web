const db = require('./../configs/sequelize')
const User = require('./model')

exports.create = (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then((user) =>{
        res.send(user);
    })  
}

exports.findAll = (req, res) => {
    User.findAll().then(users => {
        res.send(users)
    }) 
}