const db = require('./server/db/db')
const app = require('./server')

const PORT = process.env.PORT || 3000;

// Sync our database
db.sync()
  .then(() => {
    // Start the server and listen for requests
    app.listen(PORT, () => {
      console.log(`listening on port http://localhost:${PORT}`);
    });
})


