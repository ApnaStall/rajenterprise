const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  amount: { type: Number, required: true },
  payment_method: { type: String, required: true },    // upi, card, cash
  payment_status: { type: String, default: "pending" } // success, failed
});

module.exports = mongoose.model("Payment", paymentSchema);
