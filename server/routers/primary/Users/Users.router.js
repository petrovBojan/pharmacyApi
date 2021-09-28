const {
  BaseRouter
} = require('xc-core');

class UsersRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.UsersService = app.$services.primary.UsersService;
    this.UsersMiddleware = app.$middlewares.primary.UsersMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.UsersService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.UsersService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.UsersService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.UsersService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.UsersService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.UsersService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.UsersService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.UsersService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.UsersService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.UsersService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.UsersService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.UsersService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.UsersService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.UsersService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.UsersService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/Users*",this.UsersMiddleware.default)

    router.get('/api/v1/Users', this.UsersMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/Users', this.UsersMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/Users/findOne', this.UsersMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/Users/groupby/:columnName', this.UsersMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/Users/distribution/:columnName', this.UsersMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/Users/distinct/:columnName', this.UsersMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/Users/aggregate/:columnName', this.UsersMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/Users/count', this.UsersMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/Users/bulk', this.UsersMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/Users/bulk', this.UsersMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/Users/bulk', this.UsersMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/Users/:id', this.UsersMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/Users/:id', this.UsersMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/Users/:id', this.UsersMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/Users/:id/exists', this.UsersMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = UsersRouter;