const {
  BaseService
} = require('xc-core');

class SysdiagramsService extends BaseService {

  constructor(app) {
    super(app);
    this.sysdiagrams = app.$dbs.primary.sysdiagrams;
  }

  async create(req, res) {
    let data = await this.sysdiagrams.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.sysdiagrams.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.sysdiagrams.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.sysdiagrams.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.sysdiagrams.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.sysdiagrams.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.sysdiagrams.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.sysdiagrams.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.sysdiagrams.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.sysdiagrams.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.sysdiagrams.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.sysdiagrams.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.sysdiagrams.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.sysdiagrams.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.sysdiagrams.delb(req.body);
    return data;
  }

}

module.exports = SysdiagramsService;