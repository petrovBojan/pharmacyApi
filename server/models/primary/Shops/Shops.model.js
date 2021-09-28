const {
  BaseModelSql
} = require('xc-data-mapper');

class Shops extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./Shops.meta.js')
    });

  }

}


module.exports = Shops;