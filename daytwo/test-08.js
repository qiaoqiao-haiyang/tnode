//node原生模块
/* 自加载模块  
global:(__dirname setTimeout module exports)
Error
Buffer:--->与缓冲区相关(字符,内存)  
字符--string——decode char string fs  stream
进程--
*/

/*
创建一个长度为10且用0填充的buffer
const  buf1 = Buffer.alloc(10);
console.log(buf1);
*/

/*
创建一个长度为10且用0填充的buffer
const  buf2 = Buffer.alloc(10,1);
console.log(buf2); 
*/

/*
const buf3 = Buffer.allocUnsafe(10)
//allocUnsaf比alloc快 返回的buffer里可能会包含旧数据  因此需要用fill()和write()进行重写
console.log(buf3);
*/

// const buf4=Buffer.from([1,2,3])
// const buf5=Buffer.from("lzq qx")
// const buf6=Buffer.from("lzq qx","ascii")

// console.log(buf4);
// console.log(buf5);
// console.log(buf6);


// const buf=Buffer.from('hello world','ascii');
// const buf2=Buffer.from('hello world','ascii');
var str = process.argv[2];
const buf=Buffer.from(str,'ascii')
console.log(buf.toString('base64'));

// http://www.163.com/1.rmvb
//aHR0cDovL3d3dy4xNjMuY29tLzEucm12Yg==

