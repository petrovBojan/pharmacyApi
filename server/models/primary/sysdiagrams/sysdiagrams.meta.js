module.exports = {
  tableName: 'sysdiagrams',
  columns: [{
      columnName: 'name',
      type: 'string',
      dataType: 'nvarchar',
      notNull: true,
      data_type_x_precision: "128",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'principal_id',
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
      columnName: 'diagram_id',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'version',
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
      columnName: 'definition',
      type: 'binary',
      dataType: 'varbinary',
      data_type_x_precision: "-1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [],
  belongsTo: [],
  dbType: 'mssql'
}