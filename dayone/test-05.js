//setTimeout 异步变成同步 普通模型
for (var i = 0; i < 10; i++) {
    var m =i;
    exec(m,function(m){
        console.log(m);
    })
    //同步代码 =>定义一个同步方法
}

function exec(param, callback) {
    //callback一定是异步么？
    setTimeout(function(){
        callback(param);
    },0)
}
console.log("end");
/*
回调函数
axios.post("/ss",{},function(){})
$.post("/aa",{},function(data){},"json")
回调函数一定是异步么->有

事件队列   异步触发--触发条件(事件I/O,磁盘I/O,网络I/O,自定义事件-events)

*/