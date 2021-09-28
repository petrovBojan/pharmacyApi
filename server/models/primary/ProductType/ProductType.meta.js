module.exports = {
  tableName: 'ProductType',
  columns: [{
      columnName: 'ProductTypeID',
      type: 'bigInteger',
      dataType: 'bigint',
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "19",
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
  ],
  pks: [],
  hasMany: [{
    "tableName": "Product",
    "referencedTableName": "ProductType",
    "columnName": "ProductTypeID",
    "referencedColumnName": "ProductTypeID",
    "constraintName": "FK_Product_ProductType",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }],
  belongsTo: [],
  dbType: 'mssql'
}