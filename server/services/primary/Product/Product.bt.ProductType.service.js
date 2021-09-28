const {
  BaseService
} = require('xc-core');

class ProductBtProductTypeService extends BaseService {

  constructor(app) {
    super(app);
    this.Product = app.$dbs.primary.Product;
  }

  async belongsTo(req, res) {
    return await this.Product.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = ProductBtProductTypeService;