const express = require("express");

const { createComment, getComment } = require("../controllers/commentControllers");

const router = express.Router();

router.get("/:id", getComment);
router.post("/create", createComment);

module.exports = router;