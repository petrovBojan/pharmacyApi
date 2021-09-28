const {
  BaseService
} = require('xc-core');

class ProductShopBtShopsService extends BaseService {

  constructor(app) {
    super(app);
    this.ProductShop = app.$dbs.primary.ProductShop;
  }

  async belongsTo(req, res) {
    return await this.ProductShop.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = ProductShopBtShopsService;