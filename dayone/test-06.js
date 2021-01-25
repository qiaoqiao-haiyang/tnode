function Demo(){
    this.a=123;
    this.bb = function(){
        console.log("456");
    }
}
Demo.prototype.shout=function(){
    console.log("shouting");
}

var demo = new Demo()
console.log(Demo.prototype==demo.__proto__);

//Object.Prototypr 产生的是空对象
//Function.prototype 产生是function(){}
