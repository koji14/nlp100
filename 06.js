// http://hacknote.jp/archives/24604/

function n_gram(params, n, mode) {
    let n_gram = []
    if(mode === "word"){
        // 単語ごと分割
        let word = params.split(" ");
        // 単語bi-gram
        for (let i = 0; i < word.length - (n - 1); i++) {
            let array = [word[i], word[i+1]]
            n_gram.push(array);
        }
        return n_gram;
    }
    else if(mode === "char"){
        // ” ”を無視して1文字ごと分割
        let char = params.replace(/ /g,'').split("");
        // 文字bi-gram
        for (var i = 0; i < char.length - (n - 1); i++) {
            n_gram.push(char[i] + char[i + 1]);  
        }
        return n_gram;
    }
}

let s1 = n_gram("paraparaparadise",2, "char");
let s2 = n_gram("paragraph", 2, "char");

// console.log(s1);
// console.log(s2);
let X = new Set(s1);
let Y = new Set(s2);
// //和集合
var t = new Set([]);
// 1つのリストに戻してコレクションに追加する
[...X,...Y].forEach(x=>t.add(x));
// s1.concat(s2).forEach(x=>t.add(x));
console.log(t);

//積集合
t.clear();//初期化
// Xに含まれるYをコレクションに追加
[...X].filter(x=>(Y).has(x)).forEach(x=>t.add(x));
console.log(t);
 
// //差集合
t.clear();
[...X].filter(x=>(!Y.has(x))).forEach(x=>t.add(x));
console.log(t);

console.log(X.has('se'))
console.log(Y.has('se'))