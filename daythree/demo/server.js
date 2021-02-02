//      /->index.html    
// click button --->ajax post---->server--->json-->chrom--->解析json
var http = require("http")
var url = require("url")
var fs = require("fs")


http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var realpath = __dirname+'/'+pathname
    if(pathname=="/favicon.ico"){
        return;
    }else if(pathname=='/'){
        var pathname = __dirname+'/'+url.parse("index.html").pathname;
        var indexData = fs.readFileSync(pathname,"utf-8")
        res.writeHead(200,{"Content-type":"text/html"})
        res.end(indexData)
    }else if(pathname=='/data'){
        var jsondata={'name':"xiaoqiao",'age':18};
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(JSON.stringify(jsondata))    
    }else{
        // res.writeHead(404,{"Content-type":"text/plain"})
        // res.end("The page is no found")

        /**
         * 完成我们的静态资源管理器
         * (1)找到这个文件-->pathname  /jq.js
         * dealWithStatic()传 网络路径以及真实路径 传res
        */
       dealWithStatic(pathname,realpath,res)
    }

}).listen(3000)
// http://localhost:3000/jquery-3.4.1.js
console.log("server start");


function dealWithStatic(pathname,realpath,res){
    //fs.existes(废)  
    fs.stat(realpath,function(err,stat){
        if(!stat){
        res.writeHead(404,{"Content-type":"text/plain"});
        res.write("The page is no founded");
        res.end();
        }else{
            //(1)判断这是什么文件  根据后缀
            var pointPosition = pathname.lastIndexOf(".") 
            var mimeString = pathname.substring(pointPosition+1)
            var mimeType;
            // var arr = pathname.split(".");
            // console.log(arr[1]);

            //(2)根据文件类型匹配相应的mime
            switch(mimeString){
                case 'css':
                    mimeType='text/css';
                    break;
                case 'jpg':
                    mimeType='image/jpeg';
                    break;
                case 'js':
                    mimeType='application/x-javascript';
                    break;            
                default:
                    mimeType="text/plain"
                    break;
                }
            //(3)读取当前文件  将其发回
            fs.readFile(realpath,'binary',function(err,file){
                if(err){
                    res.writeHead(500,{"Contnet-type":"text/plain"})
                    res.end(err);
                }else{
                    res.writeHead(200,{"Content-type":mimeType})
                    res.write(file,'binary')
                    res.end()
                }
            })
        }
    })
}