var mongo = require("mongodb");
var mongoClient = require("mongoclient");

var db = mongoClient("localhost:27017/genesysdb");
var collection = db.get("employee");

collection.insert({name:"sss", age:"32"});