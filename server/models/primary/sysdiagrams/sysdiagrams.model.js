const {
  BaseModelSql
} = require('xc-data-mapper');

class sysdiagrams extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./sysdiagrams.meta.js')
    });

  }

}


module.exports = sysdiagrams;