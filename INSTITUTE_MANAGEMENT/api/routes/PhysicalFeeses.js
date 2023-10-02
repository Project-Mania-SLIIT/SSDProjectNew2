const router = require("express").Router();
const PhysicalFees = require("../models/PhysicalFees");


//CREATE PhysicalFees
router.post("/", async (req, res) => {
  const newPhysicalFees = new PhysicalFees(req.body);
  try {
    const feecount = await PhysicalFees.count()
    newPhysicalFees.payment_id = 'PPID00' + (parseInt(feecount)+1)

      try {
        const savedPhysicalFees = await newPhysicalFees.save();
        res.status(200).json(savedPhysicalFees);
      } catch (err) {
        res.status(500).json(err);
      }

  } catch (error) {
    console.log(error)
  }

});

//UPDATE PhysicalFees
router.put("/:payment_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.findById(req.params.payment_id);
    if (physicalfees.student_id === req.body.student_id) {
      try {
        const updatedPhysicalFees = await PhysicalFees.findByIdAndUpdate(
          req.params.payment_id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPhysicalFees);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your online fees!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE PhysicalFees
router.delete("/:payment_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.findById(req.params.payment_id);
    if (physicalfees.student_id === req.body.student_id) {
      try {
        await physicalfees.delete();
        res.status(200).json("Fees has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your physical fees!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PAYMENTS
router.get("/:payment_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.findOne({'payment_id':req.params.payment_id});
    res.status(200).json(physicalfees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PAYMENTS 
router.get("/", async (req, res) => {
  const pay_id = req.query.payment_id;
  try {
    let payments;
    if (pay_id) {
      subjects = await PhysicalFees.find({ payment_id });
    } else {
      payments = await PhysicalFees.find();
    }
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;