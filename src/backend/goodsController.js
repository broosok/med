const Goods = require("./models/Good");
const jwt = require("jsonwebtoken");
const { secret } = require("./config");
const User = require("./models/User");
const orders = require("./models/orders");
const dayjs = require("dayjs");

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

      const promises = items.map(async (item) => {
        const good = await Goods.findOne({ title: item.title });

        if (good) {
          const size = good.sizes.filter((x) => x.size === item.size)[0];

          if (size.qnty >= item.qnty) {
            return true;
          } else {
            return new Promise((res) => res(false));
          }
        }
      });

      const r = await Promise.all(promises);
      const len = r.filter(Boolean).length;

      if (len !== r.length) {
        return res
          .status(400)
          .json({ message: "Ошибка. Нет такого кол-во на складе" });
      }

      const upadtes = items.map(async (item) => {
        const idx = item.size - 35;
        return await Goods.updateOne(
          { title: item.title },
          { $inc: { [`sizes.${idx}.qnty`]: -1 } }
        );
      });

      await Promise.all(upadtes);

      const obj = {
        user: user.id,
        items,
        date: dayjs(new Date()).format("YYYY-MM-DD"),
        ...req.body,
      };

      const order = await new orders(obj).save();

      res.json({ success: true, id: order._id });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Ошибка оформления заказа" });
    }
  }

  async getOrder(req, res) {
    const token = req.cookies.access_token;
    const user = jwt.verify(token, secret);

    const ords = await orders.find({ user: user.id });

    return res.json({ success: true, data: ords.reverse() });
  }
}

module.exports = new GoodsController();
