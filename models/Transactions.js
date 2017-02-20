const db = require('../db');

module.exports = db.defineModel('retail', {
    invoiceNo: db.STRING(20),
    stockCode: db.STRING(20),
    description: db.STRING(100),
    quantity: db.INTEGER,
    invoiceDate: db.DATE,
    unitPrice: db.DOUBLE,
    country: db.STRING(20)
});