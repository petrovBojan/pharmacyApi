const {
  BaseRouter
} = require('xc-core');

class ShopsRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ShopsService = app.$services.primary.ShopsService;
    this.ShopsMiddleware = app.$middlewares.primary.ShopsMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ShopsService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ShopsService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ShopsService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ShopsService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ShopsService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ShopsService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ShopsService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ShopsService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ShopsService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ShopsService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ShopsService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ShopsService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ShopsService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ShopsService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ShopsService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/Shops*",this.ShopsMiddleware.default)

    router.get('/api/v1/Shops', this.ShopsMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/Shops', this.ShopsMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/Shops/findOne', this.ShopsMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/Shops/groupby/:columnName', this.ShopsMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/Shops/distribution/:columnName', this.ShopsMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/Shops/distinct/:columnName', this.ShopsMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/Shops/aggregate/:columnName', this.ShopsMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/Shops/count', this.ShopsMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/Shops/bulk', this.ShopsMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/Shops/bulk', this.ShopsMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/Shops/bulk', this.ShopsMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/Shops/:id', this.ShopsMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/Shops/:id', this.ShopsMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/Shops/:id', this.ShopsMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/Shops/:id/exists', this.ShopsMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ShopsRouter;