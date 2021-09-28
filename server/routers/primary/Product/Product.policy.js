module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/Product': {
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
  '/api/v1/Product/:id': {
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
  '/api/v1/Product/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/Product/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/Product/bulk': {
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

  '/api/v1/Product/has/ProductShop': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/:parentId/ProductShop': {
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
  '/api/v1/Product/:parentId/ProductShop/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/:parentId/ProductShop/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/:parentId/ProductShop/:id': {
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
  '/api/v1/Product/:parentId/ProductShop/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */
  '/api/v1/Product/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Product/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


};