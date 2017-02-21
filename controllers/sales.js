const datas = require('../services/data');

module.exports = {
    'GET /sales': async (ctx, next) => {
        // var pets = await data.byName('Pet', 'Odie');
        // var pp = await data.byName('Pet', 'Garfield');
        // pets = await pets.concat(pp);
        ctx.render('sales.html', {
            title: 'Sales Status',
            // res: JSON.stringify(pets)
        });
    },
    'GET /data': async (ctx, next) => {
        var data = await datas.bySQL("select Date(invoiceDate) date, ROUND(SUM(sales), 2) daily from " +
            "transactions group by DATE(invoiceDate) limit 20");
        ctx.response.type = 'application/json';
        ctx.response.body = data;
    }
};