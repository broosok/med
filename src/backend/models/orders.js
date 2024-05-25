const { Schema, model } = require("mongoose");

/* const SIZE = new Schema({
  size: { type: String, required: true },
  qnty: { type: Number, default: 0, required: true },
}); */

const Order = new Schema({
  user: [{ type: String, ref: "User" }],
  items: { type: Array, required: true },
  date: { type: String, required: true },
  email: { type: String, required: true },
  street: { type: String, required: true },
  numberhome: { type: String, required: true },
  flat: { type: String, required: true },
  entrance: { type: String, required: true },
  entercom: { type: String, required: true },
  floor: { type: String, required: true },


  
  
});

module.exports = model("order", Order);
