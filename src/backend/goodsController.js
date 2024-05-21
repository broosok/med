const Goods = require("./models/Good");

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
}

module.exports = new GoodsController();
