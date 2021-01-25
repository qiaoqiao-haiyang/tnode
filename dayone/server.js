var http = require("http")
var fs=require("fs")

var port = fs.readFileSync("./port.txt","utf-8")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("<h1>hello xuejiao</h1>")
}).listen(port)

console.log(`sever start port ${port}`);

//try catch捕获异常
//能捕获:同步异常
//不能捕获:异步异常   node通过domain来捕获异步异常

//node如何接受输入参数

//三码一致：文件编码utf-8  浏览器解码utf-8  数据库编码utf-8 

/*
req--request
res--response
{"Content-type":"text/plain"}意思是按字符串进行解析
{"Content-type":"text/html"}意思是按html语法进行解析
mime 409种  常用text/html   text/css   application/json


//如何吧str转变成json

/*
server--client server端向client端发送请求   ||   client端向server端返回
统称为数据包->(包头和包体)
statuscode 
200 请求成功。一般用于GET与POST请求
301 永久移动。
302 临时移动。
304 未修改。
307 临时重定向。
404 服务器无法根据客户端的请求找到资源（网页）。
5** 服务器错误，服务器在处理请求的过程中发生了错误 */