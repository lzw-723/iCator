const sequelize = require('../../../src/database/sequelize')
const catModel = require('../../../src/model/cat')

const assert = require('assert');
describe('db/sequelize.js', function () {
    describe('#init()', function () {
        it('should', function () {
            sequelize.test();
            let cat = sequelize.cat.build(catModel.newCat());
            sequelize.cat.save(cat);
        });
    });
});