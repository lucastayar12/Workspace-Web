const db = require('./../configs/sequelize');
const User = require('./../user/model');
const Post = require('./model')



exports.create = (req, res) => {
    Post.create({
        conteudo: req.body.conteudo,
        user: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    },
        {
            include: [{
                association: Post.User
            }]
        }
    ).then((post) => {
        res.send(post);

    }).catch((err) => {
        console.log("Erro: " + err);
    })
}

exports.findAll = (req, res) => {
    Post.findAll({ include: User, order:["createdAt"] }).then(conts => {
        res.send(conts)
    })
}

exports.update = (req, res) => {
    Post.update(
        {
            conteudo: req.body.conteudo
        },
        {
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.send({ "message": "ok" });
        })
}

exports.remove = (req,res) => {
    Post.destroy({
        where : {
            id : req.body.id
        }
    }).then((affectedRows) => {
        res.send({'message' : 'ok' , 'affectedRows' : affectedRows});
    })
}