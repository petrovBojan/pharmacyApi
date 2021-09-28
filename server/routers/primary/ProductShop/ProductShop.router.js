const {
  BaseRouter
} = require('xc-core');

class ProductShopRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductShopService = app.$services.primary.ProductShopService;
    this.ProductShopMiddleware = app.$middlewares.primary.ProductShopMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ProductShopService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ProductShopService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ProductShopService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ProductShopService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ProductShopService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ProductShopService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ProductShopService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ProductShopService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ProductShopService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ProductShopService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ProductShopService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ProductShopService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ProductShopService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ProductShopService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ProductShopService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/ProductShop*",this.ProductShopMiddleware.default)

    router.get('/api/v1/ProductShop', this.ProductShopMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/ProductShop', this.ProductShopMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ProductShop/findOne', this.ProductShopMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/ProductShop/groupby/:columnName', this.ProductShopMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/ProductShop/distribution/:columnName', this.ProductShopMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/ProductShop/distinct/:columnName', this.ProductShopMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/ProductShop/aggregate/:columnName', this.ProductShopMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ProductShop/count', this.ProductShopMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/ProductShop/bulk', this.ProductShopMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/ProductShop/bulk', this.ProductShopMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/ProductShop/bulk', this.ProductShopMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/ProductShop/:id', this.ProductShopMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ProductShop/:id', this.ProductShopMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ProductShop/:id', this.ProductShopMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ProductShop/:id/exists', this.ProductShopMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ProductShopRouter;