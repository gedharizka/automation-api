const { expect } = require("chai");
const login = require("../service/login");
const {
  CreateUser,
  GetUserByUserId,
  InvalidGetAllUser,
  DeleteUser
} = require("../service/user");
const { dataCreateUserNegative } = require("../data/user");

describe("CRUD User Negative", () => {
  let accessToken;
  let userId = "83e3360d-b83b-4ce7-ae54-ed9c95cd36e9";
  let userId2 = "83e3DD360d-b83b-4ce7-ae54-ed9c95cd36e9";

  before(async () => {
    try {
      const loginRes = await login();
      accessToken = loginRes.body.data.accessToken;
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Failed get all user", async () => {
    try {
      const res = await InvalidGetAllUser(accessToken);
      expect(res.status).to.equal(404);
      expect(res._body.message).to.equal(" Your URL Not Found");
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Create user with empty email", async () => {
    try {
      const res = await CreateUser(dataCreateUserNegative, accessToken);
      expect(res.status).to.equal(400);
      expect(res._body.message).to.equal(`"email" is not allowed to be empty`);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Error find user by userId", async () => {
    try {
      const res = await GetUserByUserId(userId, accessToken);
      expect(res.status).to.equal(404);
      expect(res._body.message).to.equal("User tidak ditemukan");
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Failed delete user by userId", async () => {
    try {
      const res = await DeleteUser(userId2, accessToken);
      expect(res.status).to.equal(404);
      expect(res._body.message).to.equal("id tidak valid");
    } catch (error) {
      console.error("Error:", error);
    }
  });

  

});
