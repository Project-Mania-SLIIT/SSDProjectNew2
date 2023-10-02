const router = require("express").Router();
const Subject = require("../models/Subject");

//CREATE SUBJECT
router.post("/", async (req, res) => {
  const newSubject = new Subject(req.body);
  try {
    const savedSubject = await newSubject.save();
    res.status(200).json(savedSubject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SUBJECT
router.get("/:id", async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL SUBJECTS
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;