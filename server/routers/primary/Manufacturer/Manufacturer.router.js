const {
  BaseRouter
} = require('xc-core');

class ManufacturerRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ManufacturerService = app.$services.primary.ManufacturerService;
    this.ManufacturerMiddleware = app.$middlewares.primary.ManufacturerMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ManufacturerService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ManufacturerService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ManufacturerService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ManufacturerService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ManufacturerService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ManufacturerService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ManufacturerService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ManufacturerService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ManufacturerService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ManufacturerService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ManufacturerService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ManufacturerService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ManufacturerService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ManufacturerService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ManufacturerService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/Manufacturer*",this.ManufacturerMiddleware.default)

    router.get('/api/v1/Manufacturer', this.ManufacturerMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/Manufacturer', this.ManufacturerMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/Manufacturer/findOne', this.ManufacturerMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/Manufacturer/groupby/:columnName', this.ManufacturerMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/Manufacturer/distribution/:columnName', this.ManufacturerMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/Manufacturer/distinct/:columnName', this.ManufacturerMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/Manufacturer/aggregate/:columnName', this.ManufacturerMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/Manufacturer/count', this.ManufacturerMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/Manufacturer/bulk', this.ManufacturerMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/Manufacturer/bulk', this.ManufacturerMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/Manufacturer/bulk', this.ManufacturerMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/Manufacturer/:id', this.ManufacturerMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/Manufacturer/:id', this.ManufacturerMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/Manufacturer/:id', this.ManufacturerMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/Manufacturer/:id/exists', this.ManufacturerMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ManufacturerRouter;