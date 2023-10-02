const router = require("express").Router();
const OnlineFees = require("../models/OnlineFees");
 
//CREATE OnlineFees
router.post("/", async (req, res) => {
  const newOnlineFees = new OnlineFees(req.body);
  
  try {
    const feecount = await OnlineFees.count()
    newOnlineFees.payment_id = 'OPID00' + (parseInt(feecount)+1)
    try {
      const savedOnlineFees = await newOnlineFees.save();
      res.status(200).json(savedOnlineFees);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log(error)
  }
  
  
});

//UPDATE OnlineFees
router.put("/:payment_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.findById(req.params.payment_id);
    if (onlinefees.student_id === req.body.student_id) {
      try {
        const updatedOnlineFees = await OnlineFees.findByIdAndUpdate(
          req.params.payment_id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedOnlineFees);
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

//DELETE OnlineFees
router.delete("/:payment_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.findById(req.params.payment_id);
    if (onlinefees.student_id === req.body.student_id) {
      try {
        await onlinefees.delete();
        res.status(200).json("Fees has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your online fees!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET OnlineFees
router.get("/:payment_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.findOne({'payment_id':req.params.payment_id});
    res.status(200).json(onlinefees);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // //GET ALL OnlineFeeses
// router.get("/", async (req, res) => {
//   try {
//     const onlinefees = await OnlineFees.find();
//     res.status(200).json(onlinefees);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//GET ALL OnlineFeeses 

router.get("/", async (req, res) => {
  const pay_id = req.query.payment_id;
  try {
    let payments;
    if (pay_id) {
      subjects = await OnlineFees.find({ payment_id });
    } else {
      payments = await OnlineFees.find();
    }
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;