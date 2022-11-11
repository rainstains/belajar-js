const request = require('supertest')
const expect = require('chai').expect
var randomstring = require("randomstring")

const baseurl = "http://restapi.adequateshop.com/api"

const name = randomstring.generate(6)
const email = randomstring.generate(6)+"@mail.com"
const password = randomstring.generate(6)

const nameU = randomstring.generate(6)
const emailU = randomstring.generate(6)+"@mail.com"
const passwordU = randomstring.generate(6)


describe("Quiz 14 API Automation", function () {
    var token
    //User Registration (/api/authaccount/registration)
    it("User Registration", async function() {
        const response = await request (baseurl)
        .post("/authaccount/registration")
        .send({
            "name": name,
            "email": email,
            "password": password
        })
        expect(response.status).to.eql(200)
        expect(response.body.code).to.eql(0)
        expect(response.body.data.Name).to.eql(name)
        expect(response.body.data.Email).to.eql(email)
    
    })

    //User Login (/api/authaccount/login)
    it("User Login", async function() {
        const response = await request (baseurl)
        .post("/authaccount/login")
        .send({
            "email": email,
            "password": password
        })
        expect(response.status).to.eql(200)
        expect(response.body.code).to.eql(0)
        expect(response.body.data.Name).to.eql(name)
        expect(response.body.data.Email).to.eql(email)

        token = response.body.data.Token
    })

    //Create New User (/api/users)
    it("Create New User", async function() {
        const response = await request (baseurl)
        .post("/users")
        .send({
            "name": nameU,
            "email": emailU,
            "password": passwordU
        })
        .set({
            Authorization: "Bearer "+token
        })

        expect(response.status).to.eql(201)
        expect(response.body.name).to.eql(nameU)
        expect(response.body.email).to.eql(emailU)

    })

}
)


