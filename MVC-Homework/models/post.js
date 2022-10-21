const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelConnection');

const Post = sequelizeConnection.define('post',{

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contest: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'User',
            key: 'id'
        }
    }
}, {
    sequelize: sequelizeConnection,
    timeStamp: false,
    freezeTableName: true,
    modelName: 'posts',
    underscored: true
});

module.exports = Post;