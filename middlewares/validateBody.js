const { HttpError } = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(new HttpError(404, "Missing required name field"));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
