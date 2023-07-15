const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");

const { registerAndLoginSchema } = require("../../schemas/users");

const router = express.Router();

//signup
router.post(
  "/users/register",
  validateBody(registerAndLoginSchema),
  ctrl.register
);

//signin
router.post("/users/login", validateBody(registerAndLoginSchema), ctrl.login);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

module.exports = router;
