module.exports = {
  tableName: 'ProductGroup',
  columns: [{
      columnName: 'ProductGroupID',
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
      columnName: 'GroupName',
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
    "referencedTableName": "ProductGroup",
    "columnName": "ProductGroupID",
    "referencedColumnName": "ProductGroupID",
    "constraintName": "FK_Product_ProductGroup",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }],
  belongsTo: [],
  dbType: 'mssql'
}