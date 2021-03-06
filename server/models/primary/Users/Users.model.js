const {XcUtils} = require('xc-core');
const {BaseModelSql} = require('xc-data-mapper');
const uuidV4 = require('uuid/v4');
const bcrypt = require('bcryptjs');

class users extends BaseModelSql {
  
  constructor({dbDriver}) {
    
    super({
      dbDriver,
      ...require('./Users.meta.js')
    });
    
  }
  
  
  async beforeInsert(user) {
    if (!user.roles) user.roles = 'user';
    if (!user.provider || user.provider === 'local') {
      user.username = user.FirstName + "." + user.LastName;
      user.salt = await XcUtils.getBCryptSalt(bcrypt);
      user.Password = await XcUtils.getBCryptHash(bcrypt, user.Password, user.salt);
      user.email_verification_token = uuidV4();
    } else {
      user.email_verified = true;
    }
  }
  
  async beforeUpdate(user) {
    if ((!user.provider || user.provider === 'local') && !user.salt) {
      user.salt = await XcUtils.getBCryptSalt(bcrypt);
      user.Password = await XcUtils.getBCryptHash(bcrypt, user.Password, user.salt);
    }
  }
  
}


module.exports = users;