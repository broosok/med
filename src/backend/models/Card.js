const { Schema, model } = require("mongoose");

const Card = new Schema({
  title: { type: String, unique: true, required: true },
  subtitle: { type: String, unique: true, required: true },
  price: { type: Number, required: true },
  tag: { type: String, required: true },
});

module.exports = model("Card", Card);
