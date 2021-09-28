const {
  BaseModelSql
} = require('xc-data-mapper');

class Manufacturer extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./Manufacturer.meta.js')
    });

  }

}


module.exports = Manufacturer;