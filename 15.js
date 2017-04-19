let fs = require('fs');
let  = '';

if (process.argv.length <= 3 ){
    console.log("引数が足りない");
    process.exit(1);
}

let num = process.argv[3];
file = fs.readFileSync(process.argv[2], 'utf-8').split('\n');
file.slice((file.length-1) - num, -1).forEach(function(element) {
    console.log(element);
}, this);