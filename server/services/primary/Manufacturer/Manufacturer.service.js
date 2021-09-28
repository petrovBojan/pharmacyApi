const {
  BaseService
} = require('xc-core');

class ManufacturerService extends BaseService {

  constructor(app) {
    super(app);
    this.Manufacturer = app.$dbs.primary.Manufacturer;
  }

  async create(req, res) {
    let data = await this.Manufacturer.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.Manufacturer.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.Manufacturer.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.Manufacturer.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.Manufacturer.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.Manufacturer.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.Manufacturer.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.Manufacturer.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.Manufacturer.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.Manufacturer.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.Manufacturer.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.Manufacturer.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.Manufacturer.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.Manufacturer.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.Manufacturer.delb(req.body);
    return data;
  }

}

module.exports = ManufacturerService;