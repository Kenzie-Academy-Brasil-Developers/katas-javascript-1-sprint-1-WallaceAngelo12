function oneThroughTwenty() {
 let result = []
  
 for(i = 1; i <= 20; i++){ 
     result.push(i)
  }
  return result
  /* Your code goes below
   Write a for or a while loop
   return the result*/
    
}

console.log(oneThroughTwenty())

//call function oneThroughTwenty

function evensToTwenty() {
    let result = []
    
    for(i = 2; i <= 20; i +=2){
      result.push(i)
    }
    return result
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
  
}
console.log(evensToTwenty())
//call function evensToTwenty

function oddsToTwenty() {
   let result = []

     for(i = 1; i <= 20; i += 2){
     result.push(i)
   }
  return result
  
  /* Your code goes below
  Write a for or a while loop
  return the result */
   
}
console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
  let result = []
  
  for(i = 5; i <= 100; i += 5){
    result.push(i)
  }
   return result
  /* Your code goes below
  Write a for or a while loop
  return the result */

}
console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
  let result = []

  for(i = 1; i <= 10; i++){
    let num = i ** 2
    result.push(num)
  }
  return result
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
    
}
console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
  let result = []

 for(i = 20; i >= 1; i--){
   result.push(i)
 }
  return result
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
  let result = []

  for(i = 20; i >= 2; i -= 2){
    result.push(i)
  }
  return result
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let result = []
 
  for(i = 19; i >= 1; i -= 2){
    result.push(i)
  }
  return result   
 /* Your code goes below
  Write a for or a while loop
  return the result */
}
console.log(oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let result = []

  for(i = 100; i >= 5; i -= 5){
    result.push(i)
  }
  return result
 /* Your code goes below
  Write a for or a while loop
  return the result */
}
console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let result = []

  for(i = 10; i >= 1; i--){
    let num = i ** 2
    result.push(num)
  }
  return result
   /* Your code goes below
  Write a for or a while loop
  return the result */
}
console.log(squareNumbersBackwards())

//call function squareNumbersBackwards
