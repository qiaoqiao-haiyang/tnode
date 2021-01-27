var buf=Buffer.from("buffer");
/*
//遍历buffer串
for(var b of buf){
    console.log(b);
}
*/
/*
//buf.entries()  --处理buf数组  buf.keys()  buf.values()
//buf.byteLength
//bit 1byte=8bit  1int=?byte 2||4||8 取决于CPU是16位||32位||64位
//buffer比较compare  buffer链接concant
for(var value of buf.entries()){
    console.log(value);
}
*/

//创建空缓冲区 把字符串的每一个字符填入缓冲区
var str = 'http://nodejs.cn'
var buf =Buffer.allocUnsafe(str.length);

for (let i=0;i<str.length;i++){
    buf[i] = str.charCodeAt(i);
}
console.log(buf.toString('ascii'));

//！！！qrst！！！
var buf1 =Buffer.allocUnsafe(26);
var buf2 =Buffer.allocUnsafe(26).fill("!");

for(var i=0;i<26;i++){
    buf1[i]=i+97  //a
}

//拷贝buf1中的第16-19字节的偏移量的数据 buf2中从8字节开始
//qrst
buf1.copy(buf2,8,15,19)
console.log(buf2.toString("ascii"));






