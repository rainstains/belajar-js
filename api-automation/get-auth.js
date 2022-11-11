const request = require('supertest')("http://restapi.adequateshop.com/api")
const expect = require('chai').expect

describe("GET /users", function () {
    it("returns all users", async function() {
        const response = await request.get("/users")
        .set({Authorization: "Bearer 5a245cbb-1b29-4b0f-9cb6-1914c5ff94e0"});

        expect(response.status).to.eql(200)
        //expect(response.body.data.length).to.eql(6)
    })
})