var Profile = require("./profile.js");

//  Handle the HTTP route GET / and POST / i.e. Home
function home(request, response){
  // if url == "/" && GET
  if(request.url === "/"){
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write("Header\n")
    response.write("Search\n")
    response.end("Footer\n")
  }
}

    // show the search field
  // if url == "/" && POST
    // redirect to /:username

//  Handle the HTTP route GET /:username i.e. /chalkers
function user(request, response){
  // if url == "/anything"
  var username = request.url.replace("/", "")
  if(username.length >0){
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write("Header\n")

    // get json from Treehouse
    var studentProfile = new Profile(username);
    // on "end"
    studentProfile.on("end", function(profileJSON){
      // show profile

      // store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      // Simple response
      response.write(values.username + " has " + values.badges + " badges.\n")
      response.end("Footer\n")
    })

    // if "error"
    studentProfile.on("error", function(error){
      // show the error
      response.write(error.message + "\n")
      response.end("Footer\n")
      })



  }
}


module.exports.home = home
module.exports.user = user
