const {
  BaseRouter
} = require('xc-core');

class ProductGroupHmProductRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductGroupMiddleware = app.$middlewares.primary.ProductGroupMiddleware;
    this.ProductGroupHmProductService = app.$services.primary.ProductGroupHmProductService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ProductGroupHmProductRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ProductGroupHmProductService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ProductGroupHmProductService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ProductGroupHmProductService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ProductGroupHmProductService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ProductGroupHmProductService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ProductGroupHmProductService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ProductGroupHmProductService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ProductGroupHmProductService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ProductGroupHmProductService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/ProductGroup*",this.ProductGroupMiddleware.default)

    router.get('/api/v1/ProductGroup/has/Product', this.ProductGroupMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/ProductGroup/:parentId/Product', this.ProductGroupMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/ProductGroup/:parentId/Product', this.ProductGroupMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ProductGroup/:parentId/Product/findOne', this.ProductGroupMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/ProductGroup/:parentId/Product/groupby/:columnName',this.ProductGroupMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/ProductGroup/:parentId/Product/distribution/:columnName',this.ProductGroupMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/ProductGroup/:parentId/Product/distinct/:columnName',this.ProductGroupMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/ProductGroup/:parentId/Product/aggregate/:columnName',this.ProductGroupMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ProductGroup/:parentId/Product/count', this.ProductGroupMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/ProductGroup/:parentId/Product/bulk',this.ProductGroupMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/ProductGroup/:parentId/Product/bulk',this.ProductGroupMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/ProductGroup/:parentId/Product/bulk',this.ProductGroupMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/ProductGroup/:parentId/Product/:id', this.ProductGroupMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ProductGroup/:parentId/Product/:id', this.ProductGroupMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ProductGroup/:parentId/Product/:id', this.ProductGroupMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ProductGroup/:parentId/Product/:id/exists', this.ProductGroupMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ProductGroupHmProductRouter;