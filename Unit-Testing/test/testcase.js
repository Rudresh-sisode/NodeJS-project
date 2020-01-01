var math=require('../math')
var user=require('../user')
var expect=require('chai').expect;//npm install chai --save-dev.
//expect is interface


/*
if(math.sum(10,5) == 15){
    console.log("success")
}
else{
    console.log("fail")
}*/
/*
descrive 
it 
beforeEach
please start from 52
*/

beforeEach(function(){

    console.log("running beforeEach()");
})

beforeEach(function(){



    console.log("after afterEach");
})

describe('mathematic test cases',function(){
    it('sum of two number',function(){
        expect(math.sum(10,5)).equal(15);
    })
})