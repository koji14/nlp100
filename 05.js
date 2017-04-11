let str = "I am an NLPer";

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


console.log(n_gram(str, 2, "word"));
console.log(n_gram(str, 2, "char"));