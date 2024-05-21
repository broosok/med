const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const authRouter = require("./authRouter");
const goodsRouter = require("./goodsRouter");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const multer = require("multer");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });

module.exports = { upload };

app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/static", express.static(__dirname + "/uploads"));
app.use("/goods", goodsRouter);

const dev = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Hellmorphin:DaNiL416103@cluster0.4vzkhfw.mongodb.net/`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

dev();
