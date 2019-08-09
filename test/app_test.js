const assert = require("assert");
const request = require("supertest");
const app = require("../app.js");

describe("The express app", () => {
    it('handles a get request to /', done => {
        request(app)
            .get('/')
            .end((err, response) => {
                assert(response.body.hi === 'there')
                done()
            })
    })
});
