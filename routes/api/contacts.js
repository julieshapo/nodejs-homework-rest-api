const express = require("express");
const {
  getAll,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
} = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { postSchema, patchSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:id", authenticate, isValidId, getContactById);

router.post("/", authenticate, validateBody(postSchema), addContact);

router.delete("/:id", authenticate, isValidId, removeContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(postSchema),
  updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(patchSchema),
  updateFavorite
);

module.exports = router;
