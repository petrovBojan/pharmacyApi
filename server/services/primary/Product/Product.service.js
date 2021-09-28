const {
  BaseService
} = require('xc-core');

class ProductService extends BaseService {

  constructor(app) {
    super(app);
    this.Product = app.$dbs.primary.Product;
  }

  async create(req, res) {
    let data = await this.Product.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.Product.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.Product.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.Product.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.Product.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.Product.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.Product.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.Product.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.Product.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.Product.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.Product.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.Product.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.Product.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.Product.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.Product.delb(req.body);
    return data;
  }

}

module.exports = ProductService;