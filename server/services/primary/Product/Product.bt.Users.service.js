const {
  BaseService
} = require('xc-core');

class ProductBtUsersService extends BaseService {

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

module.exports = ProductBtUsersService;