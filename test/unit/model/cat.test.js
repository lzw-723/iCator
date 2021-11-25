const assert = require('assert');
const Mock = require('mockjs');
const cat = require('../../../src/model/cat');

describe('model/cat.js', function () {
    describe('#newCat()', function () {

        it('可以新建对象', function () {
            let c = cat.newCat();
            assert.notEqual(c.cid, undefined);
            assert.notEqual(c.color, undefined);
            assert.notEqual(c.name, undefined);
            assert.notEqual(c.gender, undefined);
            assert.notEqual(c.photo, undefined);
            assert.notEqual(c.status, undefined);
            assert.notEqual(c.remark, undefined);
        });

        it('可以新建简单对象', function () {
            let c = cat.newSimpleCat();
            assert.notEqual(c.cid, undefined);
            assert.notEqual(c.name, undefined);
            assert.notEqual(c.photo, undefined);
        });
    });
});