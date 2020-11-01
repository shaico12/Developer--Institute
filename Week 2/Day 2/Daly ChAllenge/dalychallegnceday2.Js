let sentence = prompt("this is not that bad at all")
let words = sentence.split(" ")
console.log(words)
let not = words.indexOf("not")
let bad = words.indexOf("bad")
let n = bad - not
if (not < bad){
    words.splice(not, n+1, "good")
    console.log(words.join(" "))    
} 
else 
console.log(sentence)
console.log("not is located at "+ not + "position, and BAD is located at " +bad+ "position of this sentence")
