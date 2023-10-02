const router = require("express").Router();
const Payment = require("../models/Payment");

router.post("/", async (req, res) => {
  const newPayment = new Payment(req.body);
  try {
    const savedPayment = await newPayment.save();
    res.status(200).json(savedPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET VIEW PAYMENT
router.get("/:id", async (req, res) => {
  try {
    const viewPayment = await Payment.findById(req.params.id);
    res.status(200).json(viewPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET VIEW ALL PAYMENT
router.get("/", async (req, res) => {
  try {
    const viewPayments = await Payment.find();
    res.status(200).json(viewPayments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PAYMENT
router.put("/updatepay/:id", async(req, res) => {
  let apaymentId=req.params.id;
  try{
    const updatedPayment = await Payment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      }
    );
    res.status(200).json(updatedPayment).json("Payment details updated");
  } catch (err) {
    res.status(500).json(err);
  }
})

//DELETE PAYMENT
router.delete("/deletepay/:id", async(req, res) => {
  let apaymentid=req.params.id;
  try {
    const deletePayment = await Payment.findByIdAndDelete(req.params.id);
    res.status(200).json("Payment has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;