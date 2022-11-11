const request = require('supertest')("https://reqres.in/api")
const expect = require('chai').expect

describe("POST /users", function () {
    it("Create new users", async function() {
        const response = await request
        .post("/users")
        .send({
            "name": "test nama js",
            "job": "qa trainee"
        })

        expect(response.status).to.eql(201)
        expect(response.body.name).to.eql("test nama js")
        expect(response.body.job).to.eql("qa trainee")
    })
})