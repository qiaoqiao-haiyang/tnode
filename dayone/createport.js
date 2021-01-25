var fs=require("fs")


//1,接收输
//调用process.argv来获取相应的参数
var argv = process.argv;
// console.log(argv);
var port = argv[2]

//2,把接收到的端口写入prot.txt
//A机器processA  processB LPC
//A机器processA  B机器processB RPC

fs.writeFile("./port.txt",port,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("sucess");
    }
})


/**
 * node模块 ->原生模块  第三方模块 自定义模块(需要添加路径)
 * 原生模块：自动加载模块:Buffer,console,global,require,module,process,timer
 * 手动加载模块
 */