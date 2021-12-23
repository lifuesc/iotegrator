const Sequelize = require('sequelize');
const instance = require('../../database');
const columns = {
    transaction:{
        type: Sequelize.STRING,
        allowNull: false
    }
}
const options = {
    freezeTableName: true,
    tableName:'transactions',
    timestamp: true,
    createdAt: 'dateCreate'
}

module.exports = instance.define('transaction', columns, options);