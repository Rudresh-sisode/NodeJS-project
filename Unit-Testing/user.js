module.exports.login=function(username,password){

    if(username !=="" && password !== ""){
        //check with database
        flag=true;
    }
    if(flag==true){
        return "login success";
    }
    else{
        return "login fail";
    }
}