let fs = require('fs');

let  file = '';

// 引数チェック
if (process.argv.length <= 3 ){
    console.log("引数が足りない");
    process.exit(1);
}
// ファイル読み込み　1行分割
file = fs.readFileSync(process.argv[2], 'utf-8').split('\n').slice(1, -1);
let i = 0;
while (file[1] !== undefined){
    let str = "";
    file.slice(0, process.argv[3]).forEach( element => {
        str += element + "\n";
    }, this);
    file.splice(0, process.argv[3]);
    fs.writeFileSync('16/split' + i, str);    
    i++;
}