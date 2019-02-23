var http = require("http");

var PORT = 3000;

function handleRequest(request, response) {

    response.end("It works!! Path Hit: " + request.url);

}

var server = http.createServer(handleREquest);

server.listen(PORT, function() {
    
    console.log("Server listening on: http://localhost:" + PORT)
});

