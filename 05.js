let str = "I am an NLPer";

let w_gram = [];
let c_gram = [];

function n_gram(params) {
    // 単語ごと分割
    let word = params.split(" ");
    // ” ”を無視して1文字ごと分割
    let char = params.replace(/ /g,'').split("");
    // 単語bi-gram
    for (let i = 0; i < word.length -1; i++) {
        let array = [word[i], word[i+1]]
        w_gram.push(array);
    }
    // 文字bi-gram
    for (var i = 0; i < char.length - 1; i++) {
        let array = [char[i], char[i + 1]]
        c_gram.push(array);   
    }
}

n_gram(str);
console.log(w_gram);
console.log(c_gram);