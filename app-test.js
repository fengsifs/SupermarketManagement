const model = require('./model');

let
    Transaction = model.Transactions;

(async () => {
    var transactions = await Transaction.findAll({
        // limit : 10,
        where: {
            invoiceDate: {
                $lt: new Date('2010-12-05T10:20:00'),
                $gt: new Date('2010-12-05T00:00:00')
            }
        }
    });
    console.log(`find ${transactions.length} transactions:`);
    for (let t of transactions)
        console.log(JSON.stringify(t));
})();