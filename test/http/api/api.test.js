const request = require('supertest');
const assert = require('assert');
const app = require('../../../app.js')
describe('GET /v1', function () {
    it('返回links', async function () {
        const response = await request(app).get('/v1');
        assert.equal(response.statusCode, 200);
        assert.equal(response.text, '{}');
    });
});