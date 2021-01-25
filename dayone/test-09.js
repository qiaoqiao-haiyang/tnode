//ip地址可以转化为十进制
var http = require("http");
// const { url } = require("inspector");

urls=['www.qq.com','www.baidu.com','www.sohu.com','www.yahoo.com'];


//需要进行异步处理    不能同步因为等第一个返回后才能进行第二个网址的发包
//发数据包  get请求  如何用node发送get请求


function fetchPage(url){
    var start = new Date();
    http.get({host:url},function(res){
        console.log("Got response from " + url);
        console.log("Request Took:",(new Date()-start),'ms');
    })
}

for(var i = 0;i<urls.length;i++){
    fetchPage(urls[i]);
}

/**
 * node  npm 包管理 npm install
 * ruby gem install sass
 * 
 */

