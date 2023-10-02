const router = require("express").Router();
const Class = require("../models/Class");

//CREATE CLASS
router.post("/", async (req, res) => {
    const newClass = new Class(req.body);
    try {
      const savedClass = await newClass.save();
      res.status(200).json(savedClass);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET CLASS
router.get("/:id", async (req, res) => {
  try {
    const viewClass = await Class.findById(req.params.id);
    res.status(200).json(viewClass);
  } catch (err) {
    res.status(500).json(err);
  }
});

  //GET ALL CLASSES
router.get("/", async (req, res) => {
    
    try {
      const viewClasses = await Class.find();
      res.status(200).json(viewClasses);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;

  