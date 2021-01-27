var fs = require("fs");


//fs.stat  检测是文件还是目录  
// OS可执行文件PE结构  ELF结构   不可执行文件  pdf word excel
fs.stat('static',function(err,stats){
    if(err){
        console.log(err);
        return false
    }
    else{
        console.log('文件:' + stats.isFile());
        console.log('目录:' + stats.isDirectory());
    }
})

//fs.readdir  读取目录下的下一级内容   把目录下的文件和文件夹都获取到


fs.readdir("static",function(error,data){
    if(error){
        console.log(error);
        return false;
    }
    console.log(data);
})

//fs.rename()   重命名  1,改名  2，剪切文件（移动）

fs.rename("./static/index.css",'./static/style.css',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("sucess");
    }
})

//fs.unlink()删除文件    fs.access()判断文件目录是否存在
fs.unlink('./static/style.css',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("删除成功");
    }
})






