//www.qq.com   ---ip   dns解析  ->递归，迭代 
//网址转化成IP地址  叫做dns解析
var  dns = require('dns');
url = "www.baidu.com"
dns.resolve4(url,function(err,addresses){
    if(err){
        console.log(err);
    }else{
        console.log(addresses);
    }
})