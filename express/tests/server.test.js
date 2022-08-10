const app = require('@root/app');
const request = require('supertest')(app);

describe('Testing to see if Jest works', () => {
    it('It should work', () => {
        expect(1).toBe(1);
    });
});

describe('GET /test/test-get', () => {
    test('It should require auth token', async () => {
        await request.get('/test/test-get').expect(401);
    });
});

describe('POST /test/test-post', () => {
    test('Should expect 200 OK', async () => {
        const data = { bodyParam1: 'param1', bodyParam2: 'param2' };

        await request
            .post('/test/test-post')
            .send(data)
            .expect(200)
            .then(async (response) => {
                // expect(response.body_id).toBeTruthy();
                expect(response.headers['content-type']).toEqual(
                    'application/json; charset=utf-8'
                );
                expect(response.body.bodyParam1 === data.bodyParam1);
                expect(response.body.bodyParam2 === data.bodyParam2);
            });
    });
});
