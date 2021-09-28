const {
  BaseRouter
} = require('xc-core');

class ProductBtUsersRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProductMiddleware = app.$middlewares.primary.ProductMiddleware;
    this.ProductBtUsersService = app.$services.primary.ProductBtUsersService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.ProductBtUsersService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/Product*",this.ProductMiddleware.default)
    router.get('/api/v1/Product/belongs/:parents', this.ProductMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = ProductBtUsersRouter;