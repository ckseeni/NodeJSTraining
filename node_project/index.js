var http = require("http");
var fs = require("fs")
var url= require("url")
http.createServer(function(request, response){
    var ur = url.parse(request.url, true)
    var pathname = ur.pathname;
    console.log("Request for ", pathname);
    fs.readFile(pathname.substr(1), function(err, data){
        if(err) {
            console.log(err.stack)
        }else{
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data.toString());
            response.end();
        }

        var qr = ur.query;
        if(pathname=="/result.html") {
            var ob= JSON.stringify(qr);
            if(ob.length>2) {
                var obj= JSON.parse(ob);
                console.log("parsed data",obj)
                response.write("Name is"+ obj.name)
                response.write("password"+ obj.pass)
                response.end();
            }
        }
    
    })
}).listen(3000); 