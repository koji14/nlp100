let fs = require('fs');
// ファイル読み込み
fs.readFile('./hightemp.txt', 'utf8', (err, text) => {
    if (err) throw err;
    // 1行ごと分割
    text = text.split('\n');
    // 
    for(i=0; i < (text.length-1); i++){
        // タブで分割
        let str = text[i].split("\t");
        // 1列目を col1.test にwrite
        fs.appendFile('col1.txt', str[0] + '\n', (err) => {
        if (err) { throw err; }});
        // console.log(str[0]);

        // 2列目を col2.test にwrite    
        fs.appendFile('col2.txt', str[1] + '\n', (err) => {
        if (err) { throw err; }});
        //console.log(str[1]);
    }
});
