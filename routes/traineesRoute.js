const express = require("express");
const { get } = require("Mongoose");
const { createTrainee, getAlltrainees, getSingleTrainee, updateTrainee, deleteTrainee } = require("../controllers/traineesController");

const router = express.Router();

router.route("/").post(createTrainee).get(getAlltrainees);
router.route("/:_id").get(getSingleTrainee).put(updateTrainee).delete(deleteTrainee);

module.exports = router;