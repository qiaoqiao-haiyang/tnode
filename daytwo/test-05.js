/*
function Demo(){
    this.a=123;
    this.bb=function(){
        console.log(456);
    }
}

module.exports = Demo;
*/


/*
module.exports = {
    "a":123,
    "bb":function(){
        console.log(456);
    }
}
 */

 /*
exports.a=123;
exports.bb=function(){
    console.log(456);
}
*/

exports={
    "a":123,
    "bb":function(){
        console.log(456);
    }
}

/*
var demo = new Demo();
demo.bb()
console.log(demo.a);

require 把文件变成模块加载

node模块  自定义模块 第三方模块 原生模块
*/