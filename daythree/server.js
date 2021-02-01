var http = require("http")
var url = require("url")
var fs = require("fs")

http.createServer(function(req,res){

    // console.log(req.url);
    // console.log(req.method);    //请求方式 http method  33种 get post put delete
    // console.log(req.headers);


    var pathname= url.parse(req.url).pathname
    if(pathname=="/favicon.ico"){
        return ;
    }else if(pathname=="/" || pathname=="/index"){
        //返回index.html
        var pathname=__dirname+'/'+url.parse("index.html").pathname;
        var indexData=fs.readFileSync(pathname,"utf-8")
        res.writeHead(200,{"Content-type":"text/html"})//写包头
        res.end(indexData)//写包体 结包
    }else if(pathname=="/img"){
        var pathname = __dirname+"/static/"+url.parse("1.jpg").pathname
        var imgData=fs.readFileSync(pathname)
        res.writeHead(200,{"Content-type":"image/jpeg"})
        res.end(imgData)//写包体 结包
    }else{
        res.writeHead(404,{"Content-type":"text/plain"})
        res.end("the page is not found")//写包体 结包
    }

    /*
    console.log(url.parse(req.url));
    // console.log(req.url);
    // console.log(req.method);    //请求方式 http method  33种 get post put delete
    // console.log(req);
    //1,发回去的文件路径
    var pathname=__dirname+'/'+url.parse("index.html").pathname;
    //2,通过文件路径把文件读取到内存
    var indexData=fs.readFileSync(pathname,"utf-8")
    //3,把读到内存的数据 打成数据包发回（写包头  写包体）
    res.writeHead(200,{"Content-type":"text/html"})//写包头
    // res.write(indexData)
    // res.end()
    res.end(indexData)//写包体 结包
    */
}).listen(3000)
console.log("server start");
//chrome->server发包  request  请求包  req
//server->chrome发包  response 返回包  res

//Tomcat  Apache Nginx webserver



/*
var server = http.createServer(function(){

})

server.listen(3001,"201.8.12.345")
*/


//如何用原生node处理  /img发回图片 get请求和 post请求



//   /--->index.html    /parse ---->pares.html

