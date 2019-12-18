
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

// create the database instance that can be used in other database files
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`, {
  logging: false // so we don't see all the SQL queries getting made
})

module.exports = db
