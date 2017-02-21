const model = require('./model');

let toBeSync = model.Daily;

// force the creation
toBeSync.sync({force: true});