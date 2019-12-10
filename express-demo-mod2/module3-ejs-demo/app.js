const express=require('express');
const app=express();
const fs=require('fs');
const port=process.env.PORT || 8080;
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('login',{title:"gogle"});

});
app.listen(port,()=> {
    console.log("server listening on por 8080");
});
app.post('/login',(req,res)=>{
   var result= fs.readFileSync('./model/student.json');
    console.log(JSON.parse(result));
    res.render('homepage',{student:JSON.parse(result).student})
})