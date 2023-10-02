const mongoose = require("mongoose");
const nPaymentSchema = new mongoose.Schema(
    {
      npaymentid: {
        type: String,
        required: true,
        unique: true
      },
      nstaffid: {
        type: String,
        required: true
       
      },
       amount: {
        type: String,
        required: true
       
      },
       staffname: {
        type: String,
        required: true
       
      },
       month: {
        type: String,
        required: true
       
      },
       wHours: {
        type: String,
        required: true
       
      },
    },
  
  );
  
  module.exports = mongoose.model("nPayment", nPaymentSchema);