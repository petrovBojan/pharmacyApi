const {
  BaseService
} = require('xc-core');

class ProductHmProductShopService extends BaseService {

  constructor(app) {
    super(app);
    this.Product = app.$dbs.primary.Product;
    this.ProductShop = app.$dbs.primary.ProductShop;
  }



  async read(req, res) {
    let data = await this.ProductShop.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'Product',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.ProductShop.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'Product',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.ProductShop.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'Product',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.ProductShop.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'Product',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.ProductShop.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'Product',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.ProductShop.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'Product',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.ProductShop.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'Product',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.Product.hasManyChildren({
      child: 'ProductShop',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.Product.hasManyList({
      ...req.query,
      childs: `ProductShop`
    })
  }

}

module.exports = ProductHmProductShopService;