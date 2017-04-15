let fs = require('fs');
fs.readFile('./hightemp.txt', 'utf8', (err, text) => {
    if (err) throw err;
    text = text.split('\n');
    for(i=0; i < (text.length-1); i++){
        let str = text[i].split("\t");
        fs.appendFile('col1.txt', str[0] + '\n', (err) => {
        if (err) { throw err; }});
        // console.log(str[0]);

        fs.appendFile('col2.txt', str[1] + '\n', (err) => {
        if (err) { throw err; }});
        //console.log(str[1]);
    }
});
