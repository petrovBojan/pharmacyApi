const {
  BaseRouter
} = require('xc-core');

class ProductTypeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductTypeService = app.$services.primary.ProductTypeService;
    this.ProductTypeMiddleware = app.$middlewares.primary.ProductTypeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ProductTypeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ProductTypeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ProductTypeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ProductTypeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ProductTypeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ProductTypeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ProductTypeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ProductTypeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ProductTypeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ProductTypeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ProductTypeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ProductTypeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ProductTypeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ProductTypeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ProductTypeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/ProductType*",this.ProductTypeMiddleware.default)

    router.get('/api/v1/ProductType', this.ProductTypeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/ProductType', this.ProductTypeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ProductType/findOne', this.ProductTypeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/ProductType/groupby/:columnName', this.ProductTypeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/ProductType/distribution/:columnName', this.ProductTypeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/ProductType/distinct/:columnName', this.ProductTypeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/ProductType/aggregate/:columnName', this.ProductTypeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ProductType/count', this.ProductTypeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/ProductType/bulk', this.ProductTypeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/ProductType/bulk', this.ProductTypeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/ProductType/bulk', this.ProductTypeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/ProductType/:id', this.ProductTypeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ProductType/:id', this.ProductTypeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ProductType/:id', this.ProductTypeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ProductType/:id/exists', this.ProductTypeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ProductTypeRouter;