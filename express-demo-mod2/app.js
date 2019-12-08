const express=require('express');
const app=express();
const fs=require('fs')
const port=process.env.PORT || 8080;
app.listen(port,()=> {
    console.log("server runing on port %s",port);
});

//define routes
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/login.html')
});
app.post("/login",(req,res)=>{

    res.end("Login Succussful");
});
app.get('/getMovies',(req,res)=>{
    //
   var data= fs.readFileSync('./moves.json')
   
    res.json(JSON.parse(data));

})