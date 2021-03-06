// Problem: We need a simple way to look at a user's badge count and JS points from a web browser
// Solution: Use Node.js to erform the profile looks ups and serve our template via HTTP

var router = require("./router.js")
//  Create a web server

// curl -k https://localhost:8000/
var http = require('http')

http.createServer(function (request, response) {
  router.home(request, response)
  router.user(request, response)
  }).listen(1337)

console.log('Server running at http://127.0.0.1:1337/')

// Function that handles the reading of files and merge in values
  // read from file and get a string
    // merge values in to string

