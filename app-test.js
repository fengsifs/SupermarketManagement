const model = require('./model');

let
    Transaction = model.Transactions;

(async () => {
    var transactions = await Transaction.findAll({
        where: {
            InvoiceNo: '536791'
        }
    });
    console.log(`find ${transactions.length} transactions:`);
    for (let t of transactions)
        console.log(JSON.stringify(t));
})();