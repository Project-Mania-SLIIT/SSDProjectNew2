const router = require("express").Router();
const Academic = require("../models/Academic");


//GET ACADEMIC STAFF
router.get("/:id", async (req, res) => {
  try {
    const viewAstaff = await Academic.findById(req.params.id);
    const { password, ...others } = viewAstaff._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ACADEMIC STAFF
router.get("/", async (req, res) => {
  const sta_id = req.query.astaffID;
  try {
    let academics;
    if (sta_id) {
      academics = await Academic.find({ astaffID });
    } else {
      academics = await Academic.find();
    }
    res.status(200).json(academics);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;