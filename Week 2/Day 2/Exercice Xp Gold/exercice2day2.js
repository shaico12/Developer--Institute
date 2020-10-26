// If the score is bigger than 90, console.log “A”
// If the score is between 80 and 90 (included), console.log “B”
// If the score is between 70(included) and 80 (included), console.log “C”
// If the score is lower than 70, console.log “D”
var grade = prompt("what is your score?")
if(grade>90){
    console.log("A");
}
 else if ( grade > 80 && grade<=90){
     console.log("B");
 }
 else if(grade > 70 && grade<=80){
   console.log("C");
 }else{
       console.log("D");
   }