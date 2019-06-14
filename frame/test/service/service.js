var dbconfig = require("../db/dbconfig");

var mongoClient = dbconfig.client;
        
var url = dbconfig.url;

class service {
    async listUser() {
        let db = await mongoClient.connect(url);
        console.log(db); 
        let result = await db.collection("users").find().toArray();
        console.log(result);
        return result;
    }
}

module.exports = service;