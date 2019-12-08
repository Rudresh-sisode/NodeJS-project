const fs=require('fs');
const chalk=require('chalk');
console.log("program started");
/*
var data=fs.readFileSync('./product.txt');
console.log(data.toString())
*/
var data=fs.readFile('./product.txt',function(err,data){
    if(err){
        console.log(chalk.red("Boss Error Occured"));
    }
    else{
        console.log("file read in  async mode");
        console.log(data.toString())
    }
})

console.log("program ended");