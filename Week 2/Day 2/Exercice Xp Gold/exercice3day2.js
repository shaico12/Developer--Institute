// Create a variable, it must be a verb.
// If the length of this string is at least 3, it should add ‘ing’ to its end, unless it already ends in ‘ing’, in which case it should add ‘ly’ instead.
// If the string length is less than 3, it should leave it unchanged.

var word = "play"
if(word.length >=3 ){
    if(word.endsWith("ing")){
    word=word + "ly"
}else{
    word=word + "ing"
}
}alert(word)