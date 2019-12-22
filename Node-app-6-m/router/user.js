//model
const express=require('express')
var user=require('../model/user');
const router=express.Router()

router.get('/:name',(req,res)=>{
    var userId=req.params.name;
    user.find((err,data)=>{
  
        res.json(data);
    })
})

router.get('/register',(req,res)=>{

    res.sendFile(__dirname+"/register.html")
})


router.post('/register',(req,res)=>{
    console.log(req.body);
    var mesg="";
    var userCollection=new user();//ORM -> mapped with schema or model

    if(req.body.username == undefined){

     
        res.json({"status": 500,"message":"username is mandatory"});
    }

    userCollection.name=req.body.username;
    userCollection.password=req.body.password;
    userCollection.save((err,result)=>{
        if(err){
            console.log("error while registering user");
            res.json({"status":500,"message":"error while registering"});
        }
        else{
            res.json(result);

                         
sgMail.send({
    to: req.body.username,
    from: 'rudranrajput@gmail.com',
    subject: 'boss this mail is send using nodejs application',
    text: 'Pleaase completed your all stuff on time, becoz we have lot-s of projeton on awaiting'
});
        }
    });
});
module.exports=router;