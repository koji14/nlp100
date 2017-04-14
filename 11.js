let fs = require('fs');
fs.readFile('./hightemp.txt', 'utf8', function(err, text){
    if (err) throw err;
    text.split('\n').forEach( (element) => {
        console.log(element.replace(/\t/g, " "));
    }, this);
});