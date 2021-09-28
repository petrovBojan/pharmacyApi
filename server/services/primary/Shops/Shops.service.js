const {
  BaseService
} = require('xc-core');

class ShopsService extends BaseService {

  constructor(app) {
    super(app);
    this.Shops = app.$dbs.primary.Shops;
  }

  async create(req, res) {
    let data = await this.Shops.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.Shops.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.Shops.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.Shops.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.Shops.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.Shops.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.Shops.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.Shops.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.Shops.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.Shops.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.Shops.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.Shops.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.Shops.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.Shops.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.Shops.delb(req.body);
    return data;
  }

}

module.exports = ShopsService;