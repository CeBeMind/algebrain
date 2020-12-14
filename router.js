// Script containing the routing functions
// The first if handle the usual pathnames, meanwhile other conditionals handle the assets

function route(handle, pathname, response,request) {
	console.log("About to route a request for: " + pathname);
	if (typeof handle[pathname] === 'function'){
		handle[pathname](response,request);
	} else if (pathname.indexOf(".js") != -1) {
		response.writeHead(200, {'Content-Type': 'text/javascript'});
		handle["assets"]('public' + pathname,response);
	}
	else if (pathname.indexOf(".css") != -1) {
		response.writeHead(200, {'Content-Type': 'text/css'});
		handle["assets"]('public' + pathname,response);
	}
	else if (pathname.indexOf(".png") != -1) {
		response.writeHead(200, {'Content-Type': 'image/png'});
		handle["assets"]('public' + pathname,response);
	}
	else if (pathname.indexOf(".ttf") != -1) {
		response.writeHead(200, {'Content-Type': 'font/ttf'});
		handle["assets"]('public' + pathname,response);
	}
	else {
		console.log("No handler was requested for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("Error 404: Not Found.");
		response.end();
	} 

}

exports.route = route;