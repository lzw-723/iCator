const request = require('supertest');
const assert = require('assert');
const app = require('../../app.js')
describe('GET /', function () {
    it('返回\'Hello Cats!\'', async function () {
        const response = await request(app).get('/');
        assert.equal(response.statusCode, 200);
        assert.equal(response.text, 'Hello Cats!');
    });
});