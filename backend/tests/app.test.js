const request = require('supertest');
const app = require('../app'); // make sure your server exports the app instance

describe('POST /submit', () => {
  it('responds with a success message', async () => {
    const response = await request(app)
      .post('/submit')
      .send({ name: "Test" });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Form received!");
  });
});
