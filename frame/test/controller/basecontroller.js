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

        serviceobj.listUser().then((db) => {
            console.log(db);
            //res.send(result);
            res.send(db);
        }).catch((err) => {
            console.log(err.stack);
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
    }
}

module.exports = basecontroller;
