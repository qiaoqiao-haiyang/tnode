setTimeout(function(){
    console.log(123);
},1);
setTimeout(function(){
    console.log(567);
},0)
/*
队列：同等条件先进先出
堆栈：先进后出
chrome浏览器的源代码实现setTimeout的延时0s和延时1s是一样的
0&&1
*/