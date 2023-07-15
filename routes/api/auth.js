const express = require("express");

const ctrl = require("../../controllers/auth");

const validateBody = require("./../../middlewares/validateBody");

const { registerAndLoginSchema } = require("../../schemas/users");

const router = express.Router();

//signup
router.post(
  "/user/register",
  validateBody(registerAndLoginSchema),
  ctrl.register
);

//signin
router.post("/user/login", validateBody(registerAndLoginSchema), ctrl.login);

module.exports = router;
