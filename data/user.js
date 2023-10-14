const {fakerID_ID :faker} = require("@faker-js/faker")



const dataCreateuser ={
    name: "Milo",
    email: "milo@mail.com",
    password: "milo123"
}

const dataCreateUserNegative ={
    name: "Gogon",
    email: "",
    password: "kasir123"
}

const dataUpdate ={
    name: "update",
    email: "update@mail.com",
    password: "kasir123"
}

const generateRandomUserData = () => {
    const name = faker.person.firstName(); // Mendapatkan nama acak
    const email = faker.internet.email({firstName: name}); // Mendapatkan alamat email acak
    const password = faker.internet.password({length:8}); // Mendapatkan kata sandi acak
  
    return {
      name,
      email,
      password,
    };
  };


module.exports  = {
    dataCreateuser,
    dataCreateUserNegative,
    dataUpdate,
    generateRandomUserData
}