const { Schema, model } = require("mongoose");

/* const SIZE = new Schema({
  size: { type: String, required: true },
  qnty: { type: Number, default: 0, required: true },
}); */

const Order = new Schema({
  user: [{ type: String, ref: "User" }],
  items: { type: Array, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = model("order", Order);
