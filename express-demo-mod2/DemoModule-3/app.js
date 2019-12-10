
console.log("program started");

setTimeout(()=>{
    console.log("5 sec");
},5000);
setTimeout(()=>{
    console.log("0 sec");
},0);

console.log("program end");


/*const listusers=(names)=>{
    names.forEach((element,i) => {
        console.log(element,i)
    });
}
const myuser =['Mark','Rober','Diana'];
listusers(myuser);
//callstack example
setTimeout(()=>{
console.log("I'm called")
},3000);
*/

/*function listusers(names){
    for(var i=0;i<names.length;i++){
        console.log(names[i]);
    }
}
var myuser=['rudresh','soham','avinash','priyanka'];

listusers(myuser);*/