const {
  BaseRouter
} = require('xc-core');

class ProductBtProductGroupRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductMiddleware = app.$middlewares.primary.ProductMiddleware;
    this.ProductBtProductGroupService = app.$services.primary.ProductBtProductGroupService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.ProductBtProductGroupService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/Product*",this.ProductMiddleware.default)
    router.get('/api/v1/Product/belongs/:parents', this.ProductMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = ProductBtProductGroupRouter;