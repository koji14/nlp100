let str1 = "パトカー";
let str2 = "タクシー";
let answer = "";
for (var i = 0; i < str1.length; i++) {
    answer += str1.charAt(i);
    answer += str2.charAt(i);
}
console.log(answer);