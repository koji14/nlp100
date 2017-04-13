let fs = require('fs');
fs.readFile('./hightemp.txt', 'utf8', function(err, text){
    if (err) throw err;
    console.log(text.split('\n').length -1);
});