module.exports = {
    'GET /inventory': async (ctx, next) => {
        ctx.render('inventory.html', {
            title: 'Inventory Status',
        });
    }
};