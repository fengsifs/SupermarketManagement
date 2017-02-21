const model = require('../model');
const config = require('../config');
const Sequelize = require('sequelize');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = {
    bySQL: function (sql) {
        return sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
    }
};