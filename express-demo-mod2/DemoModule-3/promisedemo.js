var promise=new Promise(function(resolve,reject){
    const a=5;
    const b=5;
    if(a - b == 10)
    {
        resolve();
    }
    else{
        reject();
    }
});
promise
.then(function(){
    console.log("resolve successfully");
})
.catch(function(){
    console.log("Catch invoked");
})