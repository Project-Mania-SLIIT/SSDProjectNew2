const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema(
    {
      apaymentid: {
        type: String,
        required: true,
        unique: true
      },
      astaffid: {
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
      basicsalary: {
        type: String,
        required: true
       
      },
    },
    
  );
  
  module.exports = mongoose.model("Payment", PaymentSchema);