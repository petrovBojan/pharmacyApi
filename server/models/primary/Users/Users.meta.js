module.exports = {
  tableName: 'Users',
  columns: [{
      columnName: 'ID',
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
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider_data',
      type: 'text',
      dataType: 'mediumtext',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider_data_plus',
      type: 'text',
      dataType: 'mediumtext',
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
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'email_verified',
      type: 'integer',
      dataType: 'tinyint',
      default: "0",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
    "referencedTableName": "Users",
    "referencedColumnName": "ID",
    "constraintName": "FK_Product_Users",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }, {
    "referencedTableName": "Users",
    "referencedColumnName": "ID",
    "constraintName": "FK_Product_Users1",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION"
  }],
  belongsTo: [],
  dbType: 'mssql'
}