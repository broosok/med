const Goods = require("./models/Good");
const jwt = require("jsonwebtoken");
const { secret } = require("./config");
const User = require("./models/User");
const orders = require("./models/orders");

class GoodsController {
  async addGood(req, res) {
    try {
      const { title, subtitle, price, brand } = req.body;

      const sizes_ = Array.from({ length: 10 }, (_, i) => ({
        size: 35 + i,
        qnty: i,
      }));

      /* const user = await Goods.findOne({ title });
      if (user) {
        return res
          .status(400)
          .json({ message: `Товар ${title} уже существует в базе данных` });
      } */

      if (sizes_.length !== 10) {
        return res
          .status(400)
          .json({ message: `Указано ${sizes_.length} размеров из 10` });
      }

      const good = new Goods({
        title,
        subtitle,
        price,
        sizes: sizes_,
        brand,
        image: "http://localhost:5000/static/" + req.files[0].filename,
      });
      await good.save();

      return res.json(good);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Ошибка добавления товара" });
    }
  }

  async getGoods(req, res) {
    try {
      const goods = await Goods.find();

      return res.json(goods);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Ошибка получения товаров" });
    }
  }

  async orderGoods(req, res) {
    try {
      const token = req.cookies.access_token;
      const user = jwt.verify(token, secret);
      const items = req.body.cart;
      const goods = await Goods.find();

      const obj = {
        user: user.id /* { $ref: "User", $id: user.id } */,
        items,
        address: "Лермонтова 98",
      };

      console.log(orders);

      const order = await new orders(obj).save();

      res.json({ success: true, id: order._id });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Ошибка оформления заказа" });
    }
  }

  async getOrder(req, res) {}
}

module.exports = new GoodsController();
