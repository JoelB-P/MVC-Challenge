const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');

const Comment = sequelizeConnection.define('comment', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'Post',
            key: 'id'
        }
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'Post',
            key: 'id'
        }
    }
}, {
    sequelize: sequelizeConnection,
    timeStamps: true,
    freezeTableName: 'comments',
    underscored: true
});

module.exports = Comment;