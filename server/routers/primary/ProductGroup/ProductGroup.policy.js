module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/ProductGroup': {
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
  '/api/v1/ProductGroup/:id': {
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
  '/api/v1/ProductGroup/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductGroup/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductGroup/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/ProductGroup/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductGroup/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductGroup/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductGroup/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/ProductGroup/bulk': {
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

  '/api/v1/ProductGroup/has/Product': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductGroup/:parentId/Product': {
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
  '/api/v1/ProductGroup/:parentId/Product/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductGroup/:parentId/Product/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ProductGroup/:parentId/Product/:id': {
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
  '/api/v1/ProductGroup/:parentId/Product/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */



};