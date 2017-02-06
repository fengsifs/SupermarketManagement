/**
 * Created by FengSi on 2017/01/19 0019.
 */
module.exports = {
    'GET /': async(ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};