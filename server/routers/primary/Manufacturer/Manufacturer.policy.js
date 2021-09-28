module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/Manufacturer': {
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
  '/api/v1/Manufacturer/:id': {
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
  '/api/v1/Manufacturer/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Manufacturer/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Manufacturer/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/Manufacturer/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Manufacturer/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Manufacturer/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Manufacturer/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/Manufacturer/bulk': {
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

  '/api/v1/Manufacturer/has/Product': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Manufacturer/:parentId/Product': {
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
  '/api/v1/Manufacturer/:parentId/Product/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Manufacturer/:parentId/Product/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/Manufacturer/:parentId/Product/:id': {
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
  '/api/v1/Manufacturer/:parentId/Product/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */



};