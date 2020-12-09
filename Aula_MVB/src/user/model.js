const db = require('./../configs/sequelize.js');
const { Model, DataTypes } = db.Sequelize;
const sequelize = db.sequelize;

class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {sequelize, modelName: 'users'})

module.exports = User;

