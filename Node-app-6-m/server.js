//controller
const express=require('express');
const bodyParser=require('body-parser');
var db=require("./db")
var user=require('./model/user');

var userRouter=require('./router/user');
var productRouter=require('./router/product');
var orderRouter=require('./router/orders');

const app=express();

const port=process.env.PORT || 8080;
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/login.html');
});

app.use((req,res)=>{
    console.log(new Date());
})

app.get('/product',[
    function(req,res,next){
        if(true){
            next();
        }
        else{
        res.json({"Status":401,"message":"Unathorized Error"});
        }

                
         },function(req,res){

            var userId=req.params.name;
            user.find((err,data)=>{
          
                res.json(data);
            });
               }]
);

app.use('/users',userRouter);
app.use('/product',productRouter);
app.use('/order',orderRouter);

app.listen(port,()=>{

    console.log('server started on port %s',port);
})