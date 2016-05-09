// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'liquid'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'liquid_test'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
