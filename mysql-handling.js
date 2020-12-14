// This script contains everything related to generic mysql connection & managing

//Required modules
const mysql = require("mysql");

// This function creates a generic connection and it's called with 4 parameters
// @h: String with the server | @u, @p: Strings (the user and the password) | @db: A string containing the database name
function CrCnn (h,u,p,db){
	if (typeof h === 'string' && typeof u === 'string' && typeof p === 'string') {
	var conn = mysql.createConnection({
		host: h,
		user: u,
		password: p,
		database: db
	});

	console.log('Successful connection.');
	}
	else {
		console.log("Error. Wrong client information.");
		return -1;
	}
	return conn; // Returns the connection
}

// A simple function that makes a query, and returns in a matrix the fields and rows 
// @c: A MySql connection | @qs: A querystring | @callback: The callback where the results will be managed
function MkQr (c,qs,callback) {
var rslt = [[],[]];

		qr = function(callback){
			c.query(qs,function(err, result, fields){ // Making query
			if (err)
				callback(err);

			rslt[0] = result; // Setting results and fields
			rslt[1] = fields;
			callback(null,rslt); // Calling callback
			});
		};

		qr(callback); // Sending callback as a parameter
/*
		qr.on('error', function (err) {
			console.log('Failed query.');
			throw err;
		});
		
		qr.on('field', function (f) {
			console.log("fields");
			console.log(f);
			rslt.flds.push(f);
		});
		
		qr.on('row', function (r) {
			console.log("rows");
			console.log(r);
			rslt.rws.push(r);
		});

		qr.on('end', function(result){
			console.log("Finished retrieving results.");
			rslt = JSON.stringify(result);
			return rslt; 
		}); 
*/
}

// This function calls a generic SELECT query
// @cnn: A MySql connection
// @f: A string containing the columns you are asking for. It must be comma separated as usual
// @t: A string containing the table
// @c: A string containing the conditionals. In case of no conditionals needed, declare it undefined
// @callback: The callback, where the results will be managed
// ps: Fucking JavaScript not supporting function overloading. I hate you and I love you 
function MkSlQr (cnn,f,t,c,callback){
	if (c != undefined){
	var qs = "SELECT " + f + " FROM " + t + " WHERE " + c;
	}
	else{
	var qs = "SELECT " + f + " FROM " + t;
	} 

	return MkQr(cnn,qs,callback);
}


exports.CrCnn = CrCnn;
exports.MkQr = MkQr;
exports.MkSlQr = MkSlQr;