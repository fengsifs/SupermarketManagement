const model = require('../model');

module.exports = {
    byName: function(table, key) {
        let mo = model[table];
        var mos = mo.findAll({
            where: {
                name: key
            }
        });
        return mos;
    }
}