const data = require('../services/data');

module.exports = {
    'GET /sales': async (ctx, next) => {
        var pets = await data.byName('Pet', 'Odie');
        var pp = await data.byName('Pet', 'Garfield');
        pets = await pets.concat(pp);
        ctx.render('sales.html', {
            title: 'Sales Status',
            res: JSON.stringify(pets)
        });
    }
};