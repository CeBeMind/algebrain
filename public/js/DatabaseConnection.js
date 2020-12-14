// Contains all the connection functions from front-end to db

function getDbContent(method,requestedURL) {
var serverRequest = new XMLHttpRequest(); // The request to the server
	serverRequest.open(method,requestedURL);
	serverRequest.onreadystatechange = function(){ //What will happen on state change
		if (serverRequest.readyState === 4 && serverRequest.status === 200){
			console.log(serverRequest);
			return JSON.parse(serverRequest.responseText); // Return data
		}

	}
	serverRequest.send(null); // Sending request to the server
}

export {
	getDbContent
}