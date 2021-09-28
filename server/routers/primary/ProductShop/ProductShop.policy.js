module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/ProductShop': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    post: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductShop/:id': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductShop/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductShop/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductShop/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/ProductShop/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductShop/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductShop/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductShop/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/ProductShop/bulk': {
    post: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Has many routes and permissions */


  /* Belongs to routes and permissions */
  '/api/v1/ProductShop/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductShop/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


};