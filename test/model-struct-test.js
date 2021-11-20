const assert = require('assert');
const Mock = require('mockjs');
const struct = require('../src/model/struct');

describe('model/struct.js', function () {
    describe('#newStruct()', function () {
        it('可以设置code', function () {
            let code = Mock.mock('@integer(100, 999)');
            let s = struct.newStruct(code, '', {});
            assert.equal(s.code, code);
        });

        it('可以设置msg', function () {
            let msg = Mock.mock('@sentence(1, 15)');
            let s = struct.newStruct(200, msg, {});
            assert.equal(s.msg, msg);
        });

        it('可以设置data', function () {
            let data = Mock.mock({ 'object|1-999': 999 });
            let s = struct.newStruct(200, '', data);
            assert.equal(s.data, data);
        });
    });
    describe('#putData()', function () {

        it('可以放对象', function () {
            let data = Mock.mock({ "object|1-999": 999 });
            let s = struct.putData(data);
            assert.equal(s.data, data);
        });

        it('可以放数组', function () {
            let arrayData = Mock.mock({
                "array|1-1000": [
                    "array",
                    "data",
                    "!"
                ]
            })
            let s = struct.putData(arrayData);
            assert.equal(s.data, arrayData);
        });
    });
});