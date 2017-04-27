let fs = require('fs');

var file = [];

// 引数チェック
if (process.argv.length <= 2 ){
    console.log("引数が足りない");
    process.exit(1);
}
// ファイル読み込み　1行分割
fs.readFileSync(process.argv[2], 'utf-8')
.split('\n').slice(1, -1)
.forEach(element => {
    file.push(element.split('\t'));
}, this);

console.log(file.sort(function(a, b) {
  return (parseFloat(a[2]) < parseFloat(b[2])) ? 1 : -1;
}));