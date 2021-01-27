var http = require("http")
var fs  =require("fs")
var path = require("path")
var url = require("url")

http.createServer(function(req,res){
    //1,明确文件路径
    var ss = url.parse("/demo.txt").pathname
    var pathname=path.join(__dirname+ss);
    //2，根据路径把文件读入内存
    // var indexData=fs.readFileSync(pathname,"utf-8");
    //3，将数据打成数据包回传给浏览器
    res.writeHead(200,{"content-type":"text/plain"})
    // res.end(indexData)
    fs.createReadStream(pathname).pipe(res)
}).listen(3000)
console.log("server start");