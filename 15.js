let fs = require('fs');
let  = '';

// 引数チェック
if (process.argv.length <= 3 ){
    console.log("引数が足りない");
    process.exit(1);
}
// ファイル読み込み　1行分割
file = fs.readFileSync(process.argv[2], 'utf-8').split('\n');
// スライスで下からｎ行
file.slice((file.length-1) - process.argv[3], -1).forEach(function(element) {
    console.log(element);
}, this);