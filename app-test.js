const model = require('./model');
const data = require('./services/data');


// let
//     Transaction = model.Transactions,
//     Daily = model.Daily

// test group
data.bySQL('select Date(invoiceDate) date, ROUND(SUM(sales), 2) daily from ' +
    'transactions group by DATE(invoiceDate) limit 20;')
    .then(function (results) {
        console.log(JSON.stringify(results))
    });

// test sum
// Transaction.sum('quantity', {
//     where: {
//         invoiceNo: '536366'
//     }
// }).then(function (sum) {
//     console.log(sum);
// });

// test raw querying
// (async () => {
//     var transactions = await Transaction.findAll({
//         // limit : 10,
//         where: {
//             invoiceDate: {
//                 $lt: new Date('2010-12-05T10:20:00'),
//                 $gt: new Date('2010-12-05T00:00:00')
//             }
//         }
//     });
//     console.log(`find ${transactions.length} transactions:`);
//     for (let t of transactions)
//         console.log(JSON.stringify(t));
// })();