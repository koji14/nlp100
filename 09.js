let str = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind .".split(" ");
let answer = "";
str.forEach(function(element) {
    if(element.length > 4){
        // シャッフル用関数
        var shuffle = function() {return Math.random()-.5};
        // console.log(element.charAt(0) + element.slice(1,-1).split("").sort(shuffle).join("") + element.slice(-1));
        
        // 一文字目　+　sliceで各単語の先頭と末尾の文字を抽出してランダムに入れ替える　+　単語の最後の文字
        answer += element.charAt(0) + element.slice(1,-1).split("").sort(shuffle).join("") + element.slice(-1) + " ";
    }
    else{
        answer += element + " ";
    }
}, this);
console.log(str.join(" "));
console.log(answer);

