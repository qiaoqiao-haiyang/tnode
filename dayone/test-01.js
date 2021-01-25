//console.log("hello world");

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },0)
}
console.log("end");


//end55555
/*
执行异步代码 需要满足两个条件   异步代码直接放到事件队列里 eventloop
1-当前线程空闲--把当前堆栈中的同步代码执行完毕
2-达到触发条件


*/


