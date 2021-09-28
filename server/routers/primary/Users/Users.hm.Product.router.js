const {
  BaseRouter
} = require('xc-core');

class UsersHmProductRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.UsersMiddleware = app.$middlewares.primary.UsersMiddleware;
    this.UsersHmProductService = app.$services.primary.UsersHmProductService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('UsersHmProductRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.UsersHmProductService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.UsersHmProductService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.UsersHmProductService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.UsersHmProductService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.UsersHmProductService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.UsersHmProductService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.UsersHmProductService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.UsersHmProductService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.UsersHmProductService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/Users*",this.UsersMiddleware.default)

    router.get('/api/v1/Users/has/Product', this.UsersMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/Users/:parentId/Product', this.UsersMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/Users/:parentId/Product', this.UsersMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/Users/:parentId/Product/findOne', this.UsersMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/Users/:parentId/Product/groupby/:columnName',this.UsersMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/Users/:parentId/Product/distribution/:columnName',this.UsersMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/Users/:parentId/Product/distinct/:columnName',this.UsersMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/Users/:parentId/Product/aggregate/:columnName',this.UsersMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/Users/:parentId/Product/count', this.UsersMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/Users/:parentId/Product/bulk',this.UsersMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/Users/:parentId/Product/bulk',this.UsersMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/Users/:parentId/Product/bulk',this.UsersMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/Users/:parentId/Product/:id', this.UsersMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/Users/:parentId/Product/:id', this.UsersMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/Users/:parentId/Product/:id', this.UsersMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/Users/:parentId/Product/:id/exists', this.UsersMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = UsersHmProductRouter;