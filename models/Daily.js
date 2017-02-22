const db = require('../db');

module.exports = db.defineModel('daily', {
    invoiceDate: db.DATEONLY,
    sales: db.DOUBLE
});