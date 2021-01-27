var fs = require("fs");

var bb=fs.readFileSync("./demo.txt","utf-8");
console.log(bb);

fs.readFile("./demo.txt","utf-8",function(err,data) {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

//fs.writeFileSync('./demo.txt',"abcd")
//fs.writeFile('./demo.txt',"abcd",function(err,data){...})
//fs.open()  fs.read() fs.write() fs.close()