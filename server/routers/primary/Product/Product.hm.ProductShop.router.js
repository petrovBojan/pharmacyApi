const {
  BaseRouter
} = require('xc-core');

class ProductHmProductShopRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductMiddleware = app.$middlewares.primary.ProductMiddleware;
    this.ProductHmProductShopService = app.$services.primary.ProductHmProductShopService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ProductHmProductShopRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ProductHmProductShopService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ProductHmProductShopService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ProductHmProductShopService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ProductHmProductShopService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ProductHmProductShopService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ProductHmProductShopService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ProductHmProductShopService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ProductHmProductShopService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ProductHmProductShopService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/Product*",this.ProductMiddleware.default)

    router.get('/api/v1/Product/has/ProductShop', this.ProductMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/Product/:parentId/ProductShop', this.ProductMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/Product/:parentId/ProductShop', this.ProductMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/Product/:parentId/ProductShop/findOne', this.ProductMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/Product/:parentId/ProductShop/groupby/:columnName',this.ProductMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/Product/:parentId/ProductShop/distribution/:columnName',this.ProductMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/Product/:parentId/ProductShop/distinct/:columnName',this.ProductMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/Product/:parentId/ProductShop/aggregate/:columnName',this.ProductMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/Product/:parentId/ProductShop/count', this.ProductMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/Product/:parentId/ProductShop/bulk',this.ProductMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/Product/:parentId/ProductShop/bulk',this.ProductMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/Product/:parentId/ProductShop/bulk',this.ProductMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/Product/:parentId/ProductShop/:id', this.ProductMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/Product/:parentId/ProductShop/:id', this.ProductMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/Product/:parentId/ProductShop/:id', this.ProductMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/Product/:parentId/ProductShop/:id/exists', this.ProductMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ProductHmProductShopRouter;