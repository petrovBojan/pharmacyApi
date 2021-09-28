module.exports = {
  tableName: 'ProductShop',
  columns: [{
      columnName: 'ProductShopID',
      type: 'bigInteger',
      dataType: 'bigint',
      notNull: true,
      autoIncrement: true,
      data_type_x_precision: "19",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ProductID',
      type: 'uniqueidentifier',
      dataType: 'uniqueidentifier',
      notNull: true,
      primaryKey: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ShopID',
      type: 'uniqueidentifier',
      dataType: 'uniqueidentifier',
      notNull: true,
      primaryKey: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [],
  belongsTo: [{
    "tableName": "ProductShop",
    "referencedTableName": "Product",
    "columnName": "ProductID",
    "referencedColumnName": "ProductID",
    "constraintName": "FK_ProductShop_Product",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }, {
    "tableName": "ProductShop",
    "referencedTableName": "Shops",
    "columnName": "ShopID",
    "referencedColumnName": "ShopID",
    "constraintName": "FK_ProductShop_Shops",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }],
  dbType: 'mssql'
}