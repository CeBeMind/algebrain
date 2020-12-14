// The algebrain-related MySQL functions

const mysqldb = require("./mysql-handling"),
	  conn = mysqldb.CrCnn("localhost","root","root","algebrain"); // Creates the connection

function retrieveBranches (event){
	mysqldb.MkSlQr(conn,'*','Branches',undefined,function(err,rslt) {
			if(err)
				console.log("Failed query."); 	
			else {
				console.log(rslt);
				event.sender.send('complete',rslt);
			}
		});
}

function retrieveChapters (brId){
	mysqldb.MkSlQr(conn,'ChapterID, ChName, ChDescription','Chapters','IdBranch = ' + brId,function(err,rslt) {
			if(err)
				console.log("Failed query."); 	
			else {
				return rslt;
			}
		});
}

function retrieveSections (chId){
	mysqldb.MkSlQr(conn,'sectionID, secName','Sections','IdChapter = ' + chId,function(err,rslt) {
			if(err)
				console.log("Failed query."); 	
			else {
				return rslt;
			}
		});
}

function retrieveSectionContent (secId){
	mysqldb.MkSlQr(conn,'content','Sections','sectionID = ' + secId,function(err,rslt) {
			if(err)
				console.log("Failed query."); 	
			else {
				return rslt;
			}
		});
}

exports.retrieveBranches = retrieveBranches;
exports.retrieveChapters = retrieveChapters;
exports.retrieveSections = retrieveSections;
exports.retrieveSectionContent = retrieveSectionContent;