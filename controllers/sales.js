const model = require('../model');

module.exports = {
    'GET /sales': async (ctx, next) => {
        let
            Pet = model.Pet;
        var pets = await Pet.findAll({
            where: {
                name: 'Garfield'
            }
        });
        ctx.render('sales.html', {
            title: 'Sales Status',
            res: JSON.stringify(pets[0])
        });
    }
};