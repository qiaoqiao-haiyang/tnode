var http = require("http")
var url = require("url")
var fs = require("fs")
var querystring = require("querystring")
var dns = require("dns")
var util = require("util")

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname
    if (pathname == "/favicon.ico") {
        return;
    } else if (pathname == "/" || pathname == "/index") {
        //返回index.html
        goIndex(res)
    } else if (pathname == "/img") {
        goImg(res)
    } else if (pathname == "/parse") {
        goPost(req, res)
    } else {
        goDefault(res)
    }

}).listen(3000)
console.log("server start");

//处理json数据    处理静态资源管理器
// 写分路由   加上传文件的功能jsonfile  md5  crypto  

function goPost(req, res) {
    //处理post提交
    //get和post区别   开辟buffer缓冲区
    //req.addListener("data",callback)  
    //req.addListener("end",callback)
    var postData = "";
    req.setEncoding("utf8")

    req.addListener("data",function(postDataChunk){
        postData+=postDataChunk
    });
    req.addListener("end",function(){
        // console.log(postData);
        var param = querystring.parse(postData)
        var dnsname=param.search_dns
        dns.resolve4(dnsname,function(err,addresses){
            if(err){
                throw new Error()
            }else{
                // console.log(addresses);
                res.writeHead(200,{"Content-type":"text/plain"})
                res.end(util.inspect(addresses))
            }
        })
        // console.log(dnsname);
    })
}
function goIndex(res) {
    var pathname = __dirname + '/' + url.parse("index.html").pathname;
    var indexData = fs.readFileSync(pathname, "utf-8")
    res.writeHead(200, { "Content-type": "text/html" })//写包头
    res.end(indexData)//写包体 结包
}
function goImg(res) {
    var pathname = __dirname + "/static/" + url.parse("1.jpg").pathname
    // var imgData = fs.readFileSync(pathname)
    res.writeHead(200, { "Content-type": "image/jpeg" })
    // res.end(imgData)//写包体 结包
    fs.createReadStream(pathname).pipe(res)
}
function goDefault(res) {
    res.writeHead(404, { "Content-type": "text/plain" })
    res.end("the page is not found")//写包体 结包
}
