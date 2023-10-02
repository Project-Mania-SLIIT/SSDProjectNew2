const router = require("express").Router();
const nPayment = require("../models/nPayment");

//CRETAE PAYMENT
router.post("/", async (req, res) => {
  const newnPayment = new nPayment(req.body);
  try {
    const savednPayment = await newnPayment.save();
    res.status(200).json(savednPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET VIEW PAYMENT
router.get("/:id", async (req, res) => {
  try {
    const viewnPayment = await nPayment.findById(req.params.id);
    res.status(200).json(viewnPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET VIEW ALL PAYMENT
router.get("/", async (req, res) => {
  try {
    const viewnPayments = await nPayment.find();
    res.status(200).json(viewnPayments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE NPAYMENT
router.put("/updatenpay/:id", async(req, res) => {
  let npaymentId=req.params.id;
  try {
    const updatednPayment = await nPayment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      }
    );
    res.status(200).json(updatednPayment);
  } catch (err) {
    res.status(500).json(err);
  }
})

//DELETE NPAYMENT
router.delete("/deletenpay/:id", async(req, res) => {
  let npaymentId=req.params.id;
  try {
    const deletenPayment = await nPayment.findByIdAndDelete(req.params.id);
    res.status(200).json("nPayment has been deleted").json("nPayment details updated");
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
