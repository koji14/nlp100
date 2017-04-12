function cipher(str){
    let cipher = "";
    str.split("").forEach(function(element) {
        if(element.match(/^[a-z]+$/)){
            cipher += String.fromCharCode((219 - element.charCodeAt(0)));
        }
        else{
            cipher += element;
        }
    }, this);
    return cipher;
}
console.log(answer = cipher("I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."));
console.log(cipher(answer));