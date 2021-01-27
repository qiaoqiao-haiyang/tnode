//遍历出当前文件夹的所有文件和文件夹  都列举出来
//function--->读取文件夹情况readdir readirSync arr.forEach()
//文件--直接显示  文件夹--递归function
//isFile()  isDirectory()

var fs=require("fs")
var path = require("path")
const { gzip } = require("zlib")

var readDir=(entry)=>{
    var dirInfo=fs.readdirSync(entry)
    dirInfo.forEach((item)=>{
        var location=path.join(entry,item);
        var info=fs.statSync(location);
        if(info.isDirectory()){
            console.log(`dir:${location}`);
            readDir(location)
        }else{
            console.log(`file:${location}`);
        }
    })
}

readDir(__dirname)


// gzip()//压缩