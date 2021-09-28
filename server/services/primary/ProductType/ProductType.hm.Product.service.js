const {
  BaseService
} = require('xc-core');

class ProductTypeHmProductService extends BaseService {

  constructor(app) {
    super(app);
    this.ProductType = app.$dbs.primary.ProductType;
    this.Product = app.$dbs.primary.Product;
  }



  async read(req, res) {
    let data = await this.Product.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductType',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.Product.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductType',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.Product.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductType',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.Product.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductType',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.Product.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductType',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.Product.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductType',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.Product.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'ProductType',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.ProductType.hasManyChildren({
      child: 'Product',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.ProductType.hasManyList({
      ...req.query,
      childs: `Product`
    })
  }

}

module.exports = ProductTypeHmProductService;