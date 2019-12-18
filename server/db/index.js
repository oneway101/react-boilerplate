const db = require('./db')
const User = require('./user')


// Define associations
// (https://sequelize-guides.netlify.com/association-types/)

// Example:
// Puppy.belongsTo(Owner)

module.exports = {
  db, User
}
