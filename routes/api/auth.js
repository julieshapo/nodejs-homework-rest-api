const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");

const {
  registerAndLoginSchema,
  emailVerifySchema,
} = require("../../schemas/users");

const router = express.Router();

//signup
router.post(
  "/users/register",
  validateBody(registerAndLoginSchema),
  ctrl.register
);

router.get("/users/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/users/verify",
  validateBody(emailVerifySchema),
  ctrl.resendVerifyEmail
);

//signin
router.post("/users/login", validateBody(registerAndLoginSchema), ctrl.login);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
