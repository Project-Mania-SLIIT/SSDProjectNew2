const router = require("express").Router();
const NonAcademic = require("../models/NonAcademic");


//GET NON ACADEMIC STAFF
router.get("/:id", async (req, res) => {
    try {
      const viewNstaff = await NonAcademic.findById(req.params.id);
      res.status(200).json(viewNstaff);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET ALL NON ACADEMIC STAFF
router.get("/", async (req, res) => {
  const nsta_id = req.query.nstaffID;
  try {
    let nonacademics;
    if (nsta_id) {
      nonacademics = await NonAcademic.find({ nstaffID });
    } else {
      nonacademics = await NonAcademic.find();
    }
    res.status(200).json(nonacademics);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;