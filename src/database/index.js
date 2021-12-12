const config = require('../config');
let database;
switch (config.database) {
    case 'sequelize-sqlite':
        database = require('./sequelize');
        break;

    default:
        database = require('./sequelize');
        break;
}

function buildCat(cat) {
    return database.cat.build(cat);
}

function saveCat(cat) {
    cat.save();
}

function allCat() {
    return database.cat.all();
}

function findOneCat(attributes) {
    return database.cat.findOne(attributes);
}


exports.cat = { build: buildCat, save: saveCat, all: allCat, findOne: findOneCat }