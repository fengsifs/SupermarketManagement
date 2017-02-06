const model = require('./model');

let
    Pet = model.Pet,
    User = model.User;

(async () => {
    var pets = await Pet.findAll({
        where: {
            name: 'Garfield'
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets)
        console.log(JSON.stringify(p));
})();