let str ="Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.".replace(/,|\./g,'').split(" ");
let num = [1, 5, 6, 7, 8, 9, 15, 16, 19];
let answer = [];
for (let i = 0; i < str.length; i++) {
    if(num.indexOf(i + 1) >= 0){
        answer[str[i].charAt(0)] = i + 1;
    }else{
        answer[str[i].slice(0, 2)] = i+1;
    }
       
}

console.log(answer)
// for (let key in answer){
//     console.log(key + " : "+ answer[key]);
// }
