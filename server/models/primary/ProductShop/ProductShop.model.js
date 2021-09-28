const {
  BaseModelSql
} = require('xc-data-mapper');

class ProductShop extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./ProductShop.meta.js')
    });

  }

}


module.exports = ProductShop;