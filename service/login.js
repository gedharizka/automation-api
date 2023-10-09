const { userLogin } = require ("../data/login.js");
const request  =require ('supertest');

const baseUrl = "https://kasir-api.belajarqa.com";


const login = async () => {
    try {
        const res =  await request(baseUrl)
        .post('/authentications')
        .send(userLogin);
        return res
    } catch (error) {
        console.error("Error:", error);
        
    }
}

module.exports = login