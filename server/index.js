const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()



app.use(morgan('dev')) // logging middleware
app.use(express.static(path.join(__dirname, 'public'))) // static Middleware
app.use(express.urlencoded({extended: false})) // body parsing middleware


// API Routes
app.use('/api', require('./api'))


// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


// Handle 500 internal server errors
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})


// Start the server and listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Your server, listening on port ${PORT}`);
});
