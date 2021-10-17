module.exports = {
  tableName: 'Product',
  columns: [{
      columnName: 'ProductID',
      type: 'uniqueidentifier',
      dataType: 'uniqueidentifier',
      notNull: true,
      default: "(newid())",
      columnDefault: "(newid())",
      primaryKey: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Title',
      type: 'string',
      dataType: 'nvarchar',
      notNull: true,
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Description',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "-1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Price',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'HaveOnStock',
      type: 'bit',
      dataType: 'bit',
      notNull: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Quantity',
      type: 'integer',
      dataType: 'smallint',
      notNull: true,
      data_type_x_precision: "5",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Image',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "250",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Promo',
      type: 'bit',
      dataType: 'bit',
      notNull: true,
      default: "((0))",
      columnDefault: "((0))",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Percentage',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ManufacturerID',
      type: 'uniqueidentifier',
      dataType: 'uniqueidentifier',
      notNull: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ProductTypeID',
      type: 'bigInteger',
      dataType: 'bigint',
      notNull: true,
      data_type_x_precision: "19",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ProductGroupID',
      type: 'bigInteger',
      dataType: 'bigint',
      notNull: true,
      data_type_x_precision: "19",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'IsDeleted',
      type: 'bit',
      dataType: 'bit',
      notNull: true,
      default: "((0))",
      columnDefault: "((0))",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
    "tableName": "ProductShop",
    "referencedTableName": "Product",
    "columnName": "ProductID",
    "referencedColumnName": "ProductID",
    "constraintName": "FK_ProductShop_Product",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }],
  belongsTo: [{
    "tableName": "Product",
    "referencedTableName": "Manufacturer",
    "columnName": "ManufacturerID",
    "referencedColumnName": "ManufacturerID",
    "constraintName": "FK_Product_Manufacturer",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }, {
    "tableName": "Product",
    "referencedTableName": "ProductGroup",
    "columnName": "ProductGroupID",
    "referencedColumnName": "ProductGroupID",
    "constraintName": "FK_Product_ProductGroup",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }, {
    "tableName": "Product",
    "referencedTableName": "ProductType",
    "columnName": "ProductTypeID",
    "referencedColumnName": "ProductTypeID",
    "constraintName": "FK_Product_ProductType",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }],
  dbType: 'mssql'
}