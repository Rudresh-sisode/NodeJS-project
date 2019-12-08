const express=require('express');//mvc frame reference
const app=express();
const port=process.env.PORT || 8080;
app.listen(port,function(){
    console.log("server listening on prot %s",port);
});

app.get('/',function(req,res){
res.sendFile(__dirname+'/lgin.html');
});

app.post('/login',function(req,res){
    res.end('login successfully !');
})

app.get('/product',function(req,res){
    res.json([{"name":"abc","Price":3434}])
})