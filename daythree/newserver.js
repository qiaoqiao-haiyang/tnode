var http = require("http")
var url = require("url")
var querystring = require("querystring")
var util = require("util")

http.createServer(function(req,res){
    //要处理get提交
    var pathname = url.parse(req.url).query;
    //字符串直接转成对象
    var obj = querystring.parse(pathname)

    // res.writeHead(200,{"Content-type":"text/plain"})
    // res.end(util.inspect(obj))

    res.writeHead(200,{"Content-type":"application/json"})
    res.end(util.inspect(obj))

    // JSON.pares application/json      
    // qs.parse->form表单
    /*
    // console.log(pathname);
    var arr = pathname.split("&")
    // for(var i=0;i<arr.length;i++){
    //     var str = arr[i] 
    // }

    // arr.forEach(function(value,index){

    // })

    // console.log(arr);
    */

    //输入过滤  input filter  输出过滤 output filter进行安全处理
    // select* from user where pass = 123 and name= or 1=1
    //sql注入攻击  sql injection
    
}).listen(3000)

console.log("server start");