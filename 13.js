let fs = require('fs');
// ファイル読み込み
let col1 = [];
let col2 = [];
let col3 = [];
// col1 ファイル読み込みし改行コードで分割
col1 = fs.readFileSync('./col1.txt', 'utf8').split('\r\n').slice(1, -1);
// console.log(col1);

// col2 ファイル読み込みし改行コードで分割
col2 = fs.readFileSync('./col2.txt', 'utf8').split('\r\n').slice(1, -1);
// console.log(col2);

// col1を1つごと取り出して col1 \t col2 \n  
for (var i = 0; i < col1.length; i++) {
    col3 += col1[i] + '\t' + col2[i] + '\n'; 
}
console.log(col3);
fs.writeFileSync('13.txt', col3);