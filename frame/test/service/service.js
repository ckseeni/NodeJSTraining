/*var dbconfig = require("../db/dbconfig");

var mongoClient = dbconfig.client;
        
var url = dbconfig.url;*/

var axios = require("axios");

class service {
    /*async listUser() {
        let db = await mongoClient.connect(url);
        console.log(db); 
        let result = await db.collection("users").find().toArray();
        console.log(result);
        return result;
    }*/

    getAxios() {
        return axios.create({
            baseURL : 'https://api.github.com/users/ckseeni/repos',
            timeout : 10000,
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        });
    }

    async listUser() {
        var axiosService = this.getAxios();
        let result = await axiosService.get();
        //console.log(result);
        return result
    }
}

module.exports = service;