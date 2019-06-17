/*var dbconfig = require("../db/dbconfig");

var mongoClient = dbconfig.client;
        
var url = dbconfig.url;*/

//var Db = require("../db/dbconnection");
//var initDb = require("../db/dbconnection").initDb;
//var dbcon = new dbConnection();


var service = require("../service/service");
var serviceobj = new service();

class basecontroller{

    
    indexPage(res) {
        res.render('index', {title: 'Welcome to registration'});
    }

    registerUser(req, res) {
        /*await Db.initDb(function() {

        });*/
        /*mongoClient.connect(url, function(err, db) {
            db.collection("users").insertOne(req.body, function(err, result) {
                if(err)
                    throw err;
                else {
                    res.render('index', {title: ''+req.body.username+" registered successfully"});
                }    
            });
        }); */
        /*var db = await Db.getDb();
        console.log(db);
        db.collection("users").insertOne(req.body, function(err, result) {
            if(err)
                throw err;
            else {
                res.render('index', {title: ''+req.body.username+" registered successfully"});
            }    
        });*/
        /*db.collection("users").insertOne(req.body, function(err, result) {
            if(err)
                throw err;
            else {
                res.render('index', {title: ''+req.body.username+" registered successfully"});
            }    
        });*/
        //console.log(req.body);
        //res.render('index', {title: 'registered successfully'});
    }

    listUser(req, res) {

        serviceobj.listUser().then((result) => {
            console.log("b");
            var s = "";
            for(var i=0;i<result.data.length;i++) {
                var j = result.data[i];
                s = s + "\n" +j.name;
                //console.log(j.name);
            }  
            console.log("\na");
            //debugger;
            //var r = result;
            
            console.log(result);  
            //res.send(result);
            //res.render('index', {title: result[0].name});
            //res.json(result);
            res.send(s);
        }).catch((err) => {
            //console.log(err.stack);
        });
        /*mongoClient.connect(url, function(err, db) {
            db.collection("users").find().toArray(function(err, result) {
                if(err)
                    throw err;
                else {
                    res.send(result);    
                }    
            });
        });  */
        
        //res.send(serviceobj.listUser());
    }
}

module.exports = basecontroller;
