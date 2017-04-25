let fs = require('fs');

let  file = '';
let list = [];
var X = new Set(list);
// 引数チェック
if (process.argv.length <= 2 ){
    console.log("引数が足りない");
    process.exit(1);
}
// ファイル読み込み　1行分割
file = fs.readFileSync(process.argv[2], 'utf-8').split('\n').slice(1, -1);
file.forEach(element => {
    X.add(element.split('\t')[0]);
}, this);

console.log(X);