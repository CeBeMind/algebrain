// This script contains the funcions that creates the server

const http = require("http"),
	  url  = require("url"),
	  port = process.env.PORT || 1123, // Server port
	  express = require("express"),
	  app = express();
	  app.use(express.static('/public')); // The static folder

function start(route,handle){
function onRequest(request,response){
	var postData = "";
	var pathname = url.parse(request.url).pathname; // Parsing the request
	console.log("Request for " + pathname + " received.");
	route(handle, pathname, response,request); // Send the pathname to the router
}

http.createServer(onRequest).listen(port);
console.log("Server is running.");
}

exports.start = start;