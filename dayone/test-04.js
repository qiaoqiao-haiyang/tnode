var firecount = 0;
var start = new Date();

var timer = setInterval(function(){
    if(new Date-start>1000){
        clearInterval(timer);
        console.log(firecount);
        return 
    }
    firecount++
},0)

/*
对于function来说带return的叫函数，不带return的叫过程

CPU时钟中断
延时的方法：setTimeout，setInterval，process.nextTick() requestAniamtionFrame
*/