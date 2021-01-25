var hello1 = require("./module.js");
hello1.setName('shine');

var hello2 = require("./module.js")
hello2.setName('shine2');

hello1.sayHello()
//模块重复加载会覆盖前面的值，默认按最后一次加载的内容