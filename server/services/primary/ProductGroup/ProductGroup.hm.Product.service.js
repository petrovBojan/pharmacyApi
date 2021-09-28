const {
  BaseService
} = require('xc-core');

class ProductGroupHmProductService extends BaseService {

  constructor(app) {
    super(app);
    this.ProductGroup = app.$dbs.primary.ProductGroup;
    this.Product = app.$dbs.primary.Product;
  }



  async read(req, res) {
    let data = await this.Product.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductGroup',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.Product.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductGroup',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.Product.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductGroup',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.Product.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductGroup',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.Product.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductGroup',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.Product.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductGroup',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.Product.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductGroup',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.ProductGroup.hasManyChildren({
      child: 'Product',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.ProductGroup.hasManyList({
      ...req.query,
      childs: `Product`
    })
  }

}

module.exports = ProductGroupHmProductService;