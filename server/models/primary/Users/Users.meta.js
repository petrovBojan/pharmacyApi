module.exports = {
  tableName: 'Users',
  columns: [{
      columnName: 'ID',
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
      columnName: 'email',
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
      columnName: 'password',
      type: 'string',
      dataType: 'nvarchar',
      notNull: true,
      data_type_x_precision: "150",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'firstname',
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
      columnName: 'lastname',
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
      columnName: 'image',
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
      columnName: 'salt',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "-1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'username',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "150",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'roles',
      type: 'string',
      dataType: 'varchar',
      default: "user",
      columnDefault: "user",
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider',
      type: 'string',
      dataType: 'varchar',
      default: "local",
      columnDefault: "local",
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider_data',
      type: 'text',
      dataType: 'text',
      data_type_x_precision: "2147483647",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider_data_plus',
      type: 'text',
      dataType: 'text',
      data_type_x_precision: "2147483647",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider_ids',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'reset_password_token',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'reset_password_expires',
      type: 'timestamp',
      dataType: 'timestamp',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'email_verification_token',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'email_verified',
      type: 'integer',
      dataType: 'smallint',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "5",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'jobtitle',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "50",
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
    {
      columnName: 'education',
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
      columnName: 'workYearsNum',
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
  hasMany: [],
  belongsTo: [],
  dbType: 'mssql'
}