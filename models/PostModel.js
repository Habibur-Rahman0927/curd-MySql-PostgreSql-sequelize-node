const Sequelize = require('sequelize')

const sequelize = require('../config/sqDB')

const Post = sequelize.define('post', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.STRING,
    }
})
// console.log(Product === sequelize.models.product);

module.exports = Post;