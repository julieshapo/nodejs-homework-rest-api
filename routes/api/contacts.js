const express = require("express");
const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { postSchema, patchSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(postSchema), ctrl.addContact);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(postSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(patchSchema),
  ctrl.updateFavorite
);

module.exports = router;
