const {
  BaseRouter
} = require('xc-core');

class ShopsHmProductShopRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ShopsMiddleware = app.$middlewares.primary.ShopsMiddleware;
    this.ShopsHmProductShopService = app.$services.primary.ShopsHmProductShopService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ShopsHmProductShopRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ShopsHmProductShopService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ShopsHmProductShopService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ShopsHmProductShopService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ShopsHmProductShopService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ShopsHmProductShopService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ShopsHmProductShopService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ShopsHmProductShopService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ShopsHmProductShopService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ShopsHmProductShopService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/Shops*",this.ShopsMiddleware.default)

    router.get('/api/v1/Shops/has/ProductShop', this.ShopsMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/Shops/:parentId/ProductShop', this.ShopsMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/Shops/:parentId/ProductShop', this.ShopsMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/Shops/:parentId/ProductShop/findOne', this.ShopsMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/Shops/:parentId/ProductShop/groupby/:columnName',this.ShopsMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/Shops/:parentId/ProductShop/distribution/:columnName',this.ShopsMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/Shops/:parentId/ProductShop/distinct/:columnName',this.ShopsMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/Shops/:parentId/ProductShop/aggregate/:columnName',this.ShopsMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/Shops/:parentId/ProductShop/count', this.ShopsMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/Shops/:parentId/ProductShop/bulk',this.ShopsMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/Shops/:parentId/ProductShop/bulk',this.ShopsMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/Shops/:parentId/ProductShop/bulk',this.ShopsMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/Shops/:parentId/ProductShop/:id', this.ShopsMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/Shops/:parentId/ProductShop/:id', this.ShopsMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/Shops/:parentId/ProductShop/:id', this.ShopsMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/Shops/:parentId/ProductShop/:id/exists', this.ShopsMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ShopsHmProductShopRouter;