const { expect } = require("chai");
const login = require("../service/login");
const {
  CreateUser,
  GetUserByUserId,
  GetAllUser,
  DeleteUser,
  UpdateUser,
} = require("../service/user");
const { dataCreateuser, dataUpdate } = require("../data/user");

describe("CRUD User Positive Case", () => {
  let accessToken;
  let userId;

  before(async () => {
    try {
      const loginRes = await login();
      accessToken = loginRes.body.data.accessToken;
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Create user success with status 201", async () => {
    try {
      const res = await CreateUser(dataCreateuser, accessToken);
      userId = res._body.data.userId;
      expect(res.status).to.equal(201);
      expect(res._body.data.name).to.equal(dataCreateuser.name);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Get all user data length > 1", async () => {
    try {
      const res = await GetAllUser(accessToken);
      expect(res.status).to.equal(200);
      expect(res._body.data.users).to.have.lengthOf.at.least(1);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Get User by UserId", async () => {
    try {
      const res = await GetUserByUserId(userId, accessToken);
      expect(res.status).to.equal(200);
      expect(res._body.data.user.id).to.equal(userId);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Update data user by userId", async () => {
    try {
      const res = await UpdateUser(dataUpdate, userId, accessToken);
      expect(res.status).to.equal(200);
      expect(res._body.message).to.equal("User berhasil diupdate");
      expect(res._body.data.name).to.equal(dataUpdate.name);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  it("Delete User by UserId", async () => {
    try {
      const res = await DeleteUser(userId, accessToken);
      expect(res.status).to.equal(200);
      expect(res._body.message).to.equal("User berhasil dihapus");
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
