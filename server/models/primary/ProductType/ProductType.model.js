const {
  BaseModelSql
} = require('xc-data-mapper');

class ProductType extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./ProductType.meta.js')
    });

  }

}


module.exports = ProductType;