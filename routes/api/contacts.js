const express = require("express");
const ctrl = require("../../controllers/contacts");

const validateBody = require("../../middlewares/validateBody");
const isValidId = require("./../../middlewares/isValidId");
const { postSchema, patchSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(postSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put("/:id", isValidId, validateBody(postSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(patchSchema),
  ctrl.updateFavorite
);

module.exports = router;
