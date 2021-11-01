const {
  BaseService
} = require('xc-core');

class ProductService extends BaseService {

  constructor(app) {
    super(app);
    this.Product = app.$dbs.primary.Product;
    this.Manufacturer = app.$dbs.primary.Manufacturer;
    this.ProductGroup = app.$dbs.primary.ProductGroup;
    this.ProductType = app.$dbs.primary.ProductType;
  }

  async create(req, res) {
    let data = await this.Product.insert(req.body);
    return data;
  }

  async list(req, res) {
    let products = await this.Product.list(req.query);
    let manufacturers = await this.Manufacturer.list();
    let productGroups = await this.ProductGroup.list();
    let productTypes = await this.ProductType.list();
    
    products.forEach(product => {
      product.ManufacturerName = manufacturers.find(m=>m.ManufacturerID == product.ManufacturerID).Name;
      product.ProductGroupName = productGroups.find(pg=>pg.ProductGroupID == product.ProductGroupID).GroupName;
      product.ProductTypeName = productTypes.find(pt=>pt.ProductTypeID == product.ProductTypeID).Name;
    });
    return products;
  }

  async read(req, res) {
    let data = await this.Product.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.Product.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.Product.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.Product.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.Product.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.Product.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.Product.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.Product.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.Product.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.Product.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.Product.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.Product.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.Product.delb(req.body);
    return data;
  }

}

module.exports = ProductService;