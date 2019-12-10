const fs=require('fs');
const util=require('util');
var read=util.promisify(fs.readFile);
Promise.all([read('./first.txt'),read('./scond.txt'),read('./third.txt')])
.then(function(data){
console.log(data);
const [data1,data2,data3]=data;
console.log(data1.toString());
console.log(data2.toString());
console.log(data3.toString());
})
.catch(function(error){
    console.log("boss error ocured");
})