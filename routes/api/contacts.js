const express = require("express");

const ctrl = require("../../controllers/contacts");

const validateBody = require("../../middlewares/validateBody");

const schema = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schema.postSchema), ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", validateBody(schema.postSchema), ctrl.updateContact);

module.exports = router;
