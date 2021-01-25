var name;
exports.setName = function(thyName){
    name=thyName;
}
exports.sayHello=function(){
    console.log("Hello",name);
}
// exports          对外公布只有object
// module.exports   对外公布->object string array Function