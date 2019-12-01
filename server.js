const http=require('http');
var port=process.env.PORT || 8080;
/*
default value assign in above line
*/
var server=http.createServer(function(req,res){
    res.writeHead({status: 200, 'content-type':'text/plain'})
    res.end("welcome to nodejs server application");
});
server.listen(8080,function(){
    console.log("server listening on port 8080");
})