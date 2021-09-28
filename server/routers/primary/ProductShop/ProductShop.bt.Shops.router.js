const {
  BaseRouter
} = require('xc-core');

class ProductShopBtShopsRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductShopMiddleware = app.$middlewares.primary.ProductShopMiddleware;
    this.ProductShopBtShopsService = app.$services.primary.ProductShopBtShopsService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.ProductShopBtShopsService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/ProductShop*",this.ProductShopMiddleware.default)
    router.get('/api/v1/ProductShop/belongs/:parents', this.ProductShopMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = ProductShopBtShopsRouter;