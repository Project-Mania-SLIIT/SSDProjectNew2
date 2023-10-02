const mongoose = require("mongoose");

const PhysicalPaySchema = new mongoose.Schema(
  {
    payment_id: {
      type: String,
      required: true,
      unique: true,
    },
    student_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    teacher_name: {
      type: String,
      required: true,
    },
    month: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("PhysicalFees", PhysicalPaySchema);