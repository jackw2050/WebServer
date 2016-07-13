//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 7000;
var PORT2 = 7500;

//We need a function which handles requests and send response
function handleRequest(request, response){
    //response.end('It Works!! Path Hit: ' + request.url);
    response.end('The good channel' );
}

function handleRequest2(request, response){
    //response.end('It Works!! Path Hit: ' + request.url);
    response.end('The bad channel' );
}

//Create a server
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

server2.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT2);
});