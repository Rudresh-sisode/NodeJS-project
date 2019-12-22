const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const url="mongodb://localhost:27017/evs";

MongoClient.connect(url,(err,db)=>{

    if(err){
        console.log("boss error occured to db");
    }
    else{
        console.log("connected successfully");
        var collection=db.collection('loginusers');

        collection.insert({"name":"Jogi","password":"jogi123","admin":true},(errors)=>{
            if(errors){
                console.log("failed");
            }
            else{
                console.log("successful inserted");
            }
        })

        /*collection.find(function(error,data){
            if(error){
                console.log("error while connecting to the logiuser table");
            }
            else{
                console.log("data received from the loginusers collection");
                console.log(data);

            }
         
        })*/
    }
})