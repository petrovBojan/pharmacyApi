const {
  BaseModelSql
} = require('xc-data-mapper');

class Product extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./Product.meta.js')
    });

  }

}


module.exports = Product;