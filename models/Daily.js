const db = require('../db');

module.exports = db.defineModel('daily', {
    invoiceNo: db.STRING(20),
    invoiceDate: db.DATE,
    sales: db.DOUBLE
});