/*
//process.argv---接收node执行的输入参
console.log(process.cwd())//返回路径
console.log(process.env)//输出当前进程的环境变量
// process.stdin  process.stdout
*/

/*
process.stdout.write("请输入你的名字")
process.stdin.on("data",function(input){
    var oo="qx在等"+input;
    console.log(oo);
    // process.stdin.pipe(process.stdout)
})
*/


/*同步程序--异步程序--异步程序
宏微任务切换  中间触发了--process.nextTick*/

/*
process.on('exit',function(){
    //设置一个延迟执行
    setTimeout(function(){
        console.log('主事件循环停止，所以不会执行');
    },0)
    console.log('退出前执行');
})

setTimeout(function(){
    console.log('1');
},500)
*/


//try-catch捕获同步异常  不能捕获异步异常   process.on()同步，异步异常都能捕获
process.on('uncaughtException',function(){
    console.log("捕获到一个异常");
})
var a = 123;
a.a()//触发异常，就已经跳出堆栈了
console.log("baixue");