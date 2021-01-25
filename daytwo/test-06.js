var Demo = require("./test-05.js")
//require加载的内存地址是指向moudle.exports的地址
// exports是module.exports的引用
// exports赋值只能采取引用赋值的方式
// exports=module.exports

// var request = require("request")  
//可能是require.js 如果没有他会去找request下的index.js

console.log(Demo);
// Demo.bb()
/*
var demo = new Demo()
demo.bb();
console.log(demo.a);
 */
