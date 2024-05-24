const Router = require("express");
const router = new Router();
const controller = require("./goodsController");
const roleMiddlewere = require("./middleewaree/role.Middleware");
const multer = require("multer");

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

router.post(
  "/add",
  roleMiddlewere(["ADMIN"]),
  upload.any(),
  controller.addGood
);

router.get("/get_all", controller.getGoods);
router.post("/order", roleMiddlewere(["USER"]), controller.orderGoods);
router.get("/get_order", roleMiddlewere(["USER"]), controller.getOrder);

module.exports = router;
