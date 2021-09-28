const {
  BaseService
} = require('xc-core');

class ProductGroupService extends BaseService {

  constructor(app) {
    super(app);
    this.ProductGroup = app.$dbs.primary.ProductGroup;
  }

  async create(req, res) {
    let data = await this.ProductGroup.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.ProductGroup.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.ProductGroup.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.ProductGroup.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.ProductGroup.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.ProductGroup.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.ProductGroup.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.ProductGroup.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.ProductGroup.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.ProductGroup.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.ProductGroup.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.ProductGroup.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.ProductGroup.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.ProductGroup.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.ProductGroup.delb(req.body);
    return data;
  }

}

module.exports = ProductGroupService;