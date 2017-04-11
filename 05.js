let str = "I am an NLPer";

let w_gram = [];
let c_gram = [];

function n_gram(params) {
    let word = params.split(" ");
    let char = params.replace(/ /g,'').split("");
    for (let i = 0; i < word.length -1; i++) {
        let array = [word[i], word[i+1]]
        w_gram.push(array);
    }
    for (var i = 0; i < char.length - 1; i++) {
        let array = [char[i], char[i + 1]]
        c_gram.push(array);   
    }
}

n_gram(str);
console.log(w_gram);
console.log(c_gram);