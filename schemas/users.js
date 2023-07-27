const Joi = require("joi");

const registerAndLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const emailVerifySchema = Joi.object({ email: Joi.string().required() });

module.exports = {
  registerAndLoginSchema,
  emailVerifySchema,
};
