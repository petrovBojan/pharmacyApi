const {
  BaseService
} = require('xc-core');

class ProductShopService extends BaseService {

  constructor(app) {
    super(app);
    this.ProductShop = app.$dbs.primary.ProductShop;
  }

  async create(req, res) {
    let data = await this.ProductShop.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.ProductShop.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.ProductShop.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.ProductShop.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.ProductShop.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.ProductShop.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.ProductShop.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.ProductShop.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.ProductShop.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.ProductShop.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.ProductShop.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.ProductShop.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.ProductShop.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.ProductShop.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.ProductShop.delb(req.body);
    return data;
  }

}

module.exports = ProductShopService;