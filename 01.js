var str = "パタトクカシーー";
str = str.split("");
var answer ="";
for (var i = 0; i< str.length; i = i+2) {
  answer += str[i];
}
console.log(answer);