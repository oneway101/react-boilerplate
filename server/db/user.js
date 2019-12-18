
const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User
