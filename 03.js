let str = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.".replace(/,|\./g, '').split(" ");
answer=[];
for (var i = 0; i < str.length; i++) {
    // console.log(str[i].length)
    answer[i] = str[i].length;
}
console.log(answer);