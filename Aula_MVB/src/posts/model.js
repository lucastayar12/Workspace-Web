
const db = require('./../configs/sequelize.js');
const { Model, DataTypes } = db.Sequelize;
const User = require("./../user/model");

const sequelize = db.sequelize;

class Post extends Model { }

Post.init({
    conteudo: {
        type: DataTypes.STRING
    }
}, { sequelize, modelName: 'posts' })

Post.User = Post.belongsTo(User);

module.exports = Post;

