require("dotenv").config();

const mongoose = require("mongoose");
const supertest = require("supertest");

const app = require("../../app");
const User = require("../../models/user");

mongoose.set("strictQuery", false);

const { DB_TEST_HOST } = process.env;

describe("login", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_TEST_HOST);

    await supertest(app).post("/api/auth/users/register").send({
      email: "test@gmail.com",
      password: "123456",
    });
  });

  afterAll(async () => {
    await User.deleteMany();

    await mongoose.disconnect(DB_TEST_HOST);
  });

  test("should login existed user", async () => {
    const response = await supertest(app).post("/api/auth/users/login").send({
      email: "test@gmail.com",
      password: "123456",
    });

    const user = await User.findOne({ email: "test@gmail.com" });

    //відповідь повина мати статус-код 200
    expect(response.statusCode).toBe(200);

    // у відповіді повинен повертатися токен
    expect(response.body.token).toBe(user.token);
  });
});
