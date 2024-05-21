const { Schema, model } = require("mongoose");

/* const SIZE = new Schema({
  size: { type: String, required: true },
  qnty: { type: Number, default: 0, required: true },
}); */

const Goods = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  price: { type: Number, required: true },
  sizes: { type: Array, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
});

module.exports = model("goods", Goods);
