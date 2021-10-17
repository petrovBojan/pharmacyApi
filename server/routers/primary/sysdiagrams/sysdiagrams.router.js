const {
  BaseRouter
} = require('xc-core');

class SysdiagramsRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.SysdiagramsService = app.$services.primary.SysdiagramsService;
    this.SysdiagramsMiddleware = app.$middlewares.primary.SysdiagramsMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.SysdiagramsService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.SysdiagramsService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.SysdiagramsService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.SysdiagramsService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.SysdiagramsService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.SysdiagramsService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.SysdiagramsService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.SysdiagramsService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.SysdiagramsService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.SysdiagramsService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.SysdiagramsService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.SysdiagramsService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.SysdiagramsService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.SysdiagramsService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.SysdiagramsService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/sysdiagrams*",this.SysdiagramsMiddleware.default)

    router.get('/api/v1/sysdiagrams', this.SysdiagramsMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/sysdiagrams', this.SysdiagramsMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/sysdiagrams/findOne', this.SysdiagramsMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/sysdiagrams/groupby/:columnName', this.SysdiagramsMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/sysdiagrams/distribution/:columnName', this.SysdiagramsMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/sysdiagrams/distinct/:columnName', this.SysdiagramsMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/sysdiagrams/aggregate/:columnName', this.SysdiagramsMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/sysdiagrams/count', this.SysdiagramsMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/sysdiagrams/bulk', this.SysdiagramsMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/sysdiagrams/bulk', this.SysdiagramsMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/sysdiagrams/bulk', this.SysdiagramsMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/sysdiagrams/:id', this.SysdiagramsMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/sysdiagrams/:id', this.SysdiagramsMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/sysdiagrams/:id', this.SysdiagramsMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/sysdiagrams/:id/exists', this.SysdiagramsMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = SysdiagramsRouter;