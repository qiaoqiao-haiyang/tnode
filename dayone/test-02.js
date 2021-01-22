var start = new Date();
setTimeout(function(){
    var end = new Date();
    console.log("Time elapsed:",end-start,'ms');
},500)

while(new Date-start<1000){};

//1000 1001 1004 1007
/*
1000ms同步跑完当前进程空闲，setTimeout的500ms早就跑完了
产生1000，1001，1004是因为各浏览器有不同的js解释器
 */