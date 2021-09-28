const {
  BaseModelSql
} = require('xc-data-mapper');

class ProductGroup extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./ProductGroup.meta.js')
    });

  }

}


module.exports = ProductGroup;