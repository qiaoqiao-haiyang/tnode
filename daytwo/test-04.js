// 直接赋值  引用赋值

var a = {name:"qiaoxin"}    //0X1a2b3c
var b =a;                   //0X1a2b3c
console.log(a);
console.log(b);

b.name = 'qiaoxin2';        //指针的内存地址没变
console.log(a);             //0X1a2b3c.name->qiaoxin2指针的内存地址没变
console.log(b);             //0X1a2b3c

// 直接赋值
var b = {name:"qiaoxin3"}  
console.log(a);              //0X1a2b3c
console.log(b);              //0x2a3d4b