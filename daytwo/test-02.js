//同步回调
function waitFive(name,function_name){
    var pus=0;
    var currentDate = new Date()
    while(pus<5000){
        var now = new Date();
        pus = now-currentDate;
    }
    function_name(name)
}
function echo(name){
    console.log(name);
}

waitFive("xin",echo)        //console.log("xin")
console.log("is cool");

