const {
  BaseRouter
} = require('xc-core');

class ProductBtManufacturerRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductMiddleware = app.$middlewares.primary.ProductMiddleware;
    this.ProductBtManufacturerService = app.$services.primary.ProductBtManufacturerService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.ProductBtManufacturerService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/Product*",this.ProductMiddleware.default)
    router.get('/api/v1/Product/belongs/:parents', this.ProductMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = ProductBtManufacturerRouter;