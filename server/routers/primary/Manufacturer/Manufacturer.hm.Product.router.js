const {
  BaseRouter
} = require('xc-core');

class ManufacturerHmProductRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ManufacturerMiddleware = app.$middlewares.primary.ManufacturerMiddleware;
    this.ManufacturerHmProductService = app.$services.primary.ManufacturerHmProductService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ManufacturerHmProductRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ManufacturerHmProductService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ManufacturerHmProductService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ManufacturerHmProductService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ManufacturerHmProductService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ManufacturerHmProductService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ManufacturerHmProductService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ManufacturerHmProductService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ManufacturerHmProductService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ManufacturerHmProductService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/Manufacturer*",this.ManufacturerMiddleware.default)

    router.get('/api/v1/Manufacturer/has/Product', this.ManufacturerMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/Manufacturer/:parentId/Product', this.ManufacturerMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/Manufacturer/:parentId/Product', this.ManufacturerMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/Manufacturer/:parentId/Product/findOne', this.ManufacturerMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/Manufacturer/:parentId/Product/groupby/:columnName',this.ManufacturerMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/Manufacturer/:parentId/Product/distribution/:columnName',this.ManufacturerMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/Manufacturer/:parentId/Product/distinct/:columnName',this.ManufacturerMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/Manufacturer/:parentId/Product/aggregate/:columnName',this.ManufacturerMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/Manufacturer/:parentId/Product/count', this.ManufacturerMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/Manufacturer/:parentId/Product/bulk',this.ManufacturerMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/Manufacturer/:parentId/Product/bulk',this.ManufacturerMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/Manufacturer/:parentId/Product/bulk',this.ManufacturerMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/Manufacturer/:parentId/Product/:id', this.ManufacturerMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/Manufacturer/:parentId/Product/:id', this.ManufacturerMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/Manufacturer/:parentId/Product/:id', this.ManufacturerMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/Manufacturer/:parentId/Product/:id/exists', this.ManufacturerMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ManufacturerHmProductRouter;