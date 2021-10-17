module.exports = {
  tableName: 'Manufacturer',
  columns: [{
      columnName: 'ManufacturerID',
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
    "referencedTableName": "Manufacturer",
    "columnName": "ManufacturerID",
    "referencedColumnName": "ManufacturerID",
    "constraintName": "FK_Product_Manufacturer",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }],
  belongsTo: [],
  dbType: 'mssql'
}