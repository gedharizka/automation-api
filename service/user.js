const request=require ('supertest');

const baseUrl = "https://kasir-api.belajarqa.com";
const invalidBaseUrl = "https://kasir-api.belajarqu.com/";


const CreateUser = async (data, token) => {
    try {
        const res =  await request(baseUrl)
        .post('/users')
        .set("Authorization", `Bearer ${token}`) 
        .send(data);
        return res
    } catch (error) {
        console.error("Error:", error);
        
    }
}
const UpdateUser = async (data,userId ,token) => {
    try {
        const res =  await request(baseUrl)
        .put(`/users/${userId}`)
        .set("Authorization", `Bearer ${token}`) 
        .send(data);
        return res
    } catch (error) {
        console.error("Error:", error);
        
    }
}

const GetUserByUserId = async (data, token) => {
    try {
        const res =  await request(baseUrl)
        .get(`/users/${data}`)
        .set("Authorization", `Bearer ${token}`) 
        return res
    } catch (error) {
        console.error("Error:", error);
        
    }
}

const GetAllUser = async (token) => {
    try {
        const res =  await request(baseUrl)
        .get(`/users`)
        .set("Authorization", `Bearer ${token}`) 
        return res
    } catch (error) {
        console.error("Error:", error);
        
    }
}
const DeleteUser = async (userId,token) => {
    try {
        const res =  await request(baseUrl)
        .delete(`/users/${userId}`)
        .set("Authorization", `Bearer ${token}`) 
        return res
    } catch (error) {
        console.error("Error:", error);
        
    }
}

const InvalidGetAllUser = async (token) => {
    try {
        const res =  await request(baseUrl)
        .get(`/user`)
        .set("Authorization", `Bearer ${token}`) 
        return res
    } catch (error) {
        console.error("Error:", error);
        
    }
}

module.exports = {
    CreateUser,
    GetUserByUserId,
    GetAllUser,
    DeleteUser,
    UpdateUser,
    InvalidGetAllUser    
}