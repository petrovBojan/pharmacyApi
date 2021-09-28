const {
  BaseRouter
} = require('xc-core');

class ProductTypeHmProductRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductTypeMiddleware = app.$middlewares.primary.ProductTypeMiddleware;
    this.ProductTypeHmProductService = app.$services.primary.ProductTypeHmProductService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ProductTypeHmProductRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ProductTypeHmProductService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ProductTypeHmProductService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ProductTypeHmProductService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ProductTypeHmProductService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ProductTypeHmProductService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ProductTypeHmProductService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ProductTypeHmProductService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ProductTypeHmProductService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ProductTypeHmProductService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/ProductType*",this.ProductTypeMiddleware.default)

    router.get('/api/v1/ProductType/has/Product', this.ProductTypeMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/ProductType/:parentId/Product', this.ProductTypeMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/ProductType/:parentId/Product', this.ProductTypeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ProductType/:parentId/Product/findOne', this.ProductTypeMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/ProductType/:parentId/Product/groupby/:columnName',this.ProductTypeMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/ProductType/:parentId/Product/distribution/:columnName',this.ProductTypeMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/ProductType/:parentId/Product/distinct/:columnName',this.ProductTypeMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/ProductType/:parentId/Product/aggregate/:columnName',this.ProductTypeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ProductType/:parentId/Product/count', this.ProductTypeMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/ProductType/:parentId/Product/bulk',this.ProductTypeMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/ProductType/:parentId/Product/bulk',this.ProductTypeMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/ProductType/:parentId/Product/bulk',this.ProductTypeMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/ProductType/:parentId/Product/:id', this.ProductTypeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ProductType/:parentId/Product/:id', this.ProductTypeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ProductType/:parentId/Product/:id', this.ProductTypeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ProductType/:parentId/Product/:id/exists', this.ProductTypeMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ProductTypeHmProductRouter;