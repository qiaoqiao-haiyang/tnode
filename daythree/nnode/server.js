//入口文件   加载路由文件
var http=require("http")
var url = require("url")
var Router = require("./router.js")

http.createServer(function(req,res){
    //获取网络路径
    var newpath = url.parse(req.url).pathname;
    // 加载路由文件
    //用什么方法可以让A文件调用B文件下的方法
    Router.router(req,res,newpath);
}).listen(3000);

console.log("server start port 3000 ");

