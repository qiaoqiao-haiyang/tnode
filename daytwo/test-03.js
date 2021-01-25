/**
 * 点餐
 */
function haveBreakfast(food,drink,callback){
    console.log("Having breakfast of " + food + ','+ drink);
    if(callback && typeof(callback)==="function"){
        setTimeout(function(){
            callback();
        },5000)
    }else{
        throw new Error
    }
}


 haveBreakfast('tosat','coffee',function(){
    console.log("finished breakfast");
 })






//怎么看事件是同步还是异步触发条件:
//  时间I/O (setTimeout setInterval setImmidate process.nextTick)
/**
 *  磁盘I/O 
 * A进程在读a.txt文件时  B进程不能同时读取a.txt文件 ※资源竞争
 * readFileSync readFile creatReadStream 
 */
/**
 * 网络I/O 
 * http smtp pop
 */
/**
 * 自定义事件 addEventListener  
 * EventEmmiter.on  EventEmmiter.emit EventEmmiter.addListener
 */



