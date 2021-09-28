module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/Shops': {
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
  '/api/v1/Shops/:id': {
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
  '/api/v1/Shops/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Shops/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Shops/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/Shops/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Shops/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Shops/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Shops/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/Shops/bulk': {
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

  '/api/v1/Shops/has/ProductShop': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Shops/:parentId/ProductShop': {
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
  '/api/v1/Shops/:parentId/ProductShop/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Shops/:parentId/ProductShop/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Shops/:parentId/ProductShop/:id': {
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
  '/api/v1/Shops/:parentId/ProductShop/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */



};