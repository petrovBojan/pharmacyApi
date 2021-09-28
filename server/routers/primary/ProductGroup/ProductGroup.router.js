const {
  BaseRouter
} = require('xc-core');

class ProductGroupRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductGroupService = app.$services.primary.ProductGroupService;
    this.ProductGroupMiddleware = app.$middlewares.primary.ProductGroupMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ProductGroupService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ProductGroupService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ProductGroupService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ProductGroupService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ProductGroupService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ProductGroupService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ProductGroupService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ProductGroupService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ProductGroupService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ProductGroupService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ProductGroupService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ProductGroupService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ProductGroupService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ProductGroupService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ProductGroupService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/ProductGroup*",this.ProductGroupMiddleware.default)

    router.get('/api/v1/ProductGroup', this.ProductGroupMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/ProductGroup', this.ProductGroupMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ProductGroup/findOne', this.ProductGroupMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/ProductGroup/groupby/:columnName', this.ProductGroupMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/ProductGroup/distribution/:columnName', this.ProductGroupMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/ProductGroup/distinct/:columnName', this.ProductGroupMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/ProductGroup/aggregate/:columnName', this.ProductGroupMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ProductGroup/count', this.ProductGroupMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/ProductGroup/bulk', this.ProductGroupMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/ProductGroup/bulk', this.ProductGroupMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/ProductGroup/bulk', this.ProductGroupMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/ProductGroup/:id', this.ProductGroupMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ProductGroup/:id', this.ProductGroupMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ProductGroup/:id', this.ProductGroupMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ProductGroup/:id/exists', this.ProductGroupMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ProductGroupRouter;