const express=require('express');
const bodyParser=require('body-parser');
const app=express();
var db=require("./db")
var user=require('./model/user');

const port=process.env.PORT || 8080;
//tunnels
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port,()=>{
    console.log("SErvier Running on port %s",port);
});

app.get('/',(req,res)=>{

    res.sendFile(__dirname + "/login.html");
});

app.post('/login',(req,res)=>{

    
    user.find({"name":req.body.username1},(err,record)=>{
        console.log(record[0]);
        if(err){
            console.log("error while logging in");
        
        }
        else if(record == null){
            console.log("no record found");
            res.json({"message":"no record found"});
        }
        else if(record[0].password != req.body.password1){
            console.log("user name and password is invalid");
            res.json({"Message":"User name and password is invalid"});
        }
       else{
           console.log("Executed !!!!!");
            res.sendFile(__dirname+'/home.html');
        
       }
    });

});

app.get('/register',(req,res)=>{

    res.sendFile(__dirname + "/index.html");
});
/*
2:29:00time stamp
-X$kbDauDnJZb4Q(gridsendpaswosl)

*/
app.post('/register',(req,res)=>{
    console.log(req.body);
    var userCollection=new user();//ORM -> mapped with schema or model
    userCollection.name=req.body.username;
    userCollection.password=req.body.password;
    userCollection.save((err,result)=>{
        if(err){
            console.log("error while registering user");
            return;
        }
        else{
            res.json(result);
        }
    });
    /* var username=req.body.username;
    var password=req.body.password;*/


});