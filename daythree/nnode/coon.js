var url=require("url")
var fs = require("fs")
var querystring = require("querystring")
// var md5 = require("md5")
var crypto = require("crypto")
var jsonfile=require("jsonfile")
var formidable=require("formidable")


exports.do_upload=function(req,res){
    const form=formidable({multiples:true});
    form.parse(req,(err,fields,files)=>{
        // console.log(files);
        // res.writeHead(200,{"Content-type":"application/json"})
        // res.end(JSON.stringify({fields,files},null,2))

        if(files.sfile.name){
            var oldpath=files.sfile.path
            var newpath=__dirname+"/upload/aj11.jpg"

            var readStream=fs.createReadStream(oldpath);
            var writeStream=fs.createWriteStream("./upload/aj1lowCNY.jpg")
            readStream.pipe(writeStream);
            readStream.on("end",function(){
                fs.unlinkSync(oldpath)
                console.log("sucess");
            })
            /*
            fs.rename(oldpath,newpath,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    console.log("上传成功");
                }
            })
            */



        }
    })
}

exports.upLoad=function(res){
    var indexPath=__dirname+"/static/"+url.parse("upload.html").pathname
    var indexData = fs.readFileSync(indexPath,"utf-8")
    res.writeHead(200,{"Content-type":"text/html"})
    res.end(indexData)
}

exports.goPost=function(req,res){
    var postData = "";
    req.setEncoding("utf8");

    req.addListener("data",function(postDataChunk){
        postData+=postDataChunk;
    });
    req.addListener("end",function(){
        var strobj=querystring.parse(postData)
        // console.log(strobj);
        var pass=strobj.pass;
        var name =strobj.uname
        // var mpass=md5(pass)

        /*
        var hash=crypto.createHash("md5");
        hash.update(pass);
        console.log(hash.digest('hex'));
        */


        /*
        // 用户名和密码对不对   读取json文件  
        var jsondata=fs.readFileSync("./demo.json","utf-8");
        // var jsonnewdata=JSON.parse(jsondata);
        // console.log(jsonnewdata);
        // console.log(typeof(jsonnewdata));
        var aa = querystring.parse(jsondata);
        console.log(aa);
        aa.replace(/\\n/g,"")
        aa.replace(/\\t/g,"")
        */

        var file="./demo.json"
        jsonfile.readFile(file,function(err,obj){
            if(err){
                console.log(err);
            }else{
                if(obj.length>0){
                    var flag=true
                    for(var i=0;i<obj.length;i++){
                        if(obj[i].name==name && obj[i].pass==pass){
                            flag=false;
                        }
                    }
                    if(flag==false){
                        var indexData="<meta charset='utf-8'> 登录名："+name+" 密码："+pass;
                        res.writeHead(200,{"Content-type":"text/html"});
                        res.end(indexData);
                    }
                    else{
                        res.writeHead(200,{"Content-type":"text/plain"})
                        res.end("pass is error")
                    }
                }
            }
        })






        //md5   rc6  SHA-1 SHA256 RSA RSA2048  都是加密算法
        //单项不可逆  
        /*
        var mpass=md5(pass)
        var salt=fs.readFileSync("pass.txt","utf-8")
        md5(md5(pass)+salt)
        console.log(mpass);
        //12345  827ccb0eea8a706c4c34a16891f84e7b Xmd5可以进行解密
        */
    })
}
exports.goIndex=function(res){
    var indexPath=__dirname+"/static/"+url.parse("index.html").pathname
    var indexData = fs.readFileSync(indexPath,"utf-8")
    res.writeHead(200,{"Content-type":"text/html"})
    res.end(indexData)
}
exports.goFault=function(res){
    res.writeHead(404,{"Content-type":"text/plain"})
    res.end("The page is no founded")
}
function readText(pathname){
    var bin = fs.readFileSync(pathanme);

    // 有BOM   会多三个字符0xBB 0xFF 0xBF
    if(bin[0]===0xFF &&bin[1]===0xBB &&bin[2]===0xBF){
        bin=bin.slice(3);
    } 
    return bin.toString('utf-8')
}