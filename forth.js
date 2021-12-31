var http =require('http')
var server =http.createServer(function(req,res){
    res.writeHead(200,{"contentType":"text/html"})
    res.write("hello");
    res.end();
}).listen(3000);
console.log("sever started on 3000 ")