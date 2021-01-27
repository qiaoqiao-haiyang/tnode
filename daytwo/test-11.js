var fs=require('fs');

var rs = fs.createReadStream("./demo.txt");
var ws =fs.createWriteStream("./sdemo.txt")
/*
//当rs碰到什么信号开始读  碰到什么信号开始写并结束  事件监听
rs.on("data",function(chunk){
    console.log(chunk.length);  //2^16一个缓冲区最大字节长度65536
    ws.write(chunk);
})
rs.on("end",function(){
    console.log("结束了");
    ws.end()
})
*/

//借助管道符
rs.pipe(ws)

