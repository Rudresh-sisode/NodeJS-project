
const argv=require('yargs').argv;
//console.log(argv.port);

if (argv.env=='PROD'){
console.log("correct");
}
else{
    console.log("dev environment");
}



/*const express=require('express');
const chalk=require('chalk')
var app=express();
console.log(chalk.red("database conected"));
console.log(chalk.red("Boss Program terminated"))*/
/*console.log(process.argv[2])
var a=parseInt(process.argv[2]);
var sign=process.argv[3];
var b=parseInt(process.argv[4])

if(sign=='+')
{
    result=a+b;
}
else if(sign=='/'){
    result=a/b;
}
console.log(result);*/