const {
  BaseRouter
} = require('xc-core');

class ProductRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductService = app.$services.primary.ProductService;
    this.ProductMiddleware = app.$middlewares.primary.ProductMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ProductService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ProductService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ProductService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ProductService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ProductService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ProductService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ProductService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ProductService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ProductService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ProductService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ProductService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ProductService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ProductService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ProductService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ProductService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/Product*",this.ProductMiddleware.default)

    router.get('/api/v1/Product', this.ProductMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/Product', this.ProductMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/Product/findOne', this.ProductMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/Product/groupby/:columnName', this.ProductMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/Product/distribution/:columnName', this.ProductMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/Product/distinct/:columnName', this.ProductMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/Product/aggregate/:columnName', this.ProductMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/Product/count', this.ProductMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/Product/bulk', this.ProductMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/Product/bulk', this.ProductMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/Product/bulk', this.ProductMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/Product/:id', this.ProductMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/Product/:id', this.ProductMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/Product/:id', this.ProductMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/Product/:id/exists', this.ProductMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ProductRouter;