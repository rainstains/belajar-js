const request = require('supertest')
const expect = require('chai').expect
const baseurl = "http://restapi.adequateshop.com/api"

describe("Quiz 14 API Automation", function () {
    var token
    //User Registration (/api/authaccount/registration)
    it("User Registration", async function() {
        const response = await request (baseurl)
        .post("/authaccount/registration")
        .send({
            "name": "trainee qa",
            "email": "trainee@mail.com",
            "password": "traineeqa",
        })
        expect(response.status).to.eql(200)
        expect(response.body.code).to.be.oneOf([0,1])
        //expect(response.body.Name).to.eql("")
        //expect(response.body.Email).to.eql("")
    
    })

    //User Login (/api/authaccount/login)
    it("User Login", async function() {
        const response = await request (baseurl)
        .post("/authaccount/login")
        .send({
            "email": "trainee@mail.com",
            "password": "traineeqa",
        })
        expect(response.status).to.eql(200)
        expect(response.body.code).to.eql(0)
        expect(response.body.data.Name).to.eql("trainee qa")
        token = response.body.data.Token
        //expect(response.body.code).to.be.oneOf([0,1])
    })

    //Create New User (/api/users)
    it("Create New User", async function() {
        const response = await request (baseurl)
        .post("/users")
        .send({
            "name": "trainee tester",
            "email": "traineeTester@mail.com",
            "password": "traineetester",
        })
        .set({
            Authorization: "Bearer "+token
        })

        expect(response.status).to.eql(201)
        expect(response.body.name).to.eql("trainee tester")
        //var token = response.body.data.token
        //expect(response.body.code).to.be.oneOf([0,1])
    })

}
)


