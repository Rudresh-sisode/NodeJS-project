const fs=require('fs');

const data=fs.readFileSync('./info.txt');
console.log(data);
fs.readFile('./info.txt',(err,info)=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("asynchroously reading data ",info.toString());
    }
})
