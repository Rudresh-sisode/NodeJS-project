var math=require('../math')
var user=require('../user')
var expect=require('chai').expect;//npm install chai --save-dev
/*
if(math.sum(10,5) == 15){
    console.log("success")
}
else{
    console.log("fail")
}*/
describe('mathematic test cases',function(){
    it('sum of two number',function(){
        expect(math.sum(10,5)).equal(15);
    })
})