//是不是所有的回调都是异步处理？
// $.post  axios.post request

function Person(){
    //answer回答问题
    //think(callback){5秒的定时}想问题   处理成异步
    this.think = function(callback){
        console.log("thinking ~~~~~~~~~~");
        setTimeout(function(){
            callback()
        },5000)
    };
    this.answer = function(){
        console.log("I'm answering ");
    }
}
var person = new Person()
person.think(function(){
    console.log("thinking 5s get the right answer");
})
person.answer();