module.exports = {
  development: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'main',
    password: 'rootmain123',
    database: 'MARKETDB',
  },
  test: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'main',
    password: 'rootmain123',
    database: 'MARKETDB',
  },
  production: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'main',
    password: 'rootmain123',
    database: 'prod',
  },
};
