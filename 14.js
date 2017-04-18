let fs = require('fs');
let  = '';

if (process.argv.length <= 3 ){
    console.log("引数が足りない");
    process.exit(1);
}

file = fs.readFileSync(process.argv[2], 'utf-8').split('\n').slice(1, -1);
let num = process.argv[3];

for (var i = 0; i < num; i++) {
    console.log(file[i]);
    
}