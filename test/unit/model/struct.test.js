const assert = require('assert');
const Mock = require('mockjs');
const struct = require('../../../src/model/struct');

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

        it('生成前后不干扰', function () {
            let code1 = Mock.mock('@integer(100, 500)');
            let msg1 = Mock.mock('@sentence(1, 7)');
            let data1 = Mock.mock({ 'object|1-500': 1 });
            let s1 = struct.newStruct(code1, msg1, data1);

            let code2 = Mock.mock('@integer(501, 999)');
            let msg2 = Mock.mock('@sentence(8, 15)');
            let data2 = Mock.mock({ 'object|501-999': 501 });
            let s2 = struct.newStruct(code2, msg2, data2);

            assert.equal(s1.code === s2.code, false);
            assert.equal(s1.msg === s2.msg, false);
            assert.equal(s1.data === s2.data, false);
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