const {
  BaseService
} = require('xc-core');

class UsersService extends BaseService {

  constructor(app) {
    super(app);
    this.Users = app.$dbs.primary.users;
  }

  async create(req, res) {
    let data = await this.Users.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.Users.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.Users.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.Users.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.Users.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.Users.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.Users.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.Users.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.Users.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.Users.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.Users.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.Users.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.Users.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.Users.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.Users.delb(req.body);
    return data;
  }

}

module.exports = UsersService;