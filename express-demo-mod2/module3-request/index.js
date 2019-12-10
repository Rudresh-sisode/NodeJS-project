const request=require('request');
const url='http://localhost:8080/getMovies';//api path

request(url,{json:true},(err,res,body)=>{
    if(err){
        return console.log("error occured");
       
    }
    else if(res.body.err){
           console.log('res.body error')
    }
    else{

        console.log(res.body); 
    }

})

/*
request header - metadat about request
-> size the data
-> content type json/text/xml
->agend details - firfox, chromt on IE
request body - the real content which you want to pass
response header= meta data of response
response body - the real content which server sends
*/