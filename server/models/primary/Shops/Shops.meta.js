module.exports = {
  tableName: 'Shops',
  columns: [{
      columnName: 'ShopID',
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
      columnName: 'Status',
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
      columnName: 'Name',
      type: 'string',
      dataType: 'nvarchar',
      notNull: true,
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'address',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "150",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'contact',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "50",
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
    "referencedTableName": "Shops",
    "columnName": "ShopID",
    "referencedColumnName": "ShopID",
    "constraintName": "FK_ProductShop_Shops",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }],
  belongsTo: [],
  dbType: 'mssql'
}