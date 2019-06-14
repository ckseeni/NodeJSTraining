var dbconfig = require("../db/dbconfig");

var mongoClient = dbconfig.client;        
var url = dbconfig.url;

let dbCon

 function initDb(callback) {

   
    //var test = "sdfa";
    if(dbCon) {
        console.log("inside initDb1");
        return  callback(null, dbCon);
    }
     mongoClient.connect(url, connected);
    function connected(err, db) {
        if(err){
            console.log("inside initDb2");
            return  callback(err);
        }   
        console.log("inside initDb3"); 
        dbCon = db;
        return  callback(null, dbCon);   
    }
    //return test;
}

 function getDb() {
    console.log("inside getDb");
    return dbCon;
}

module.exports = {getDb, initDb};