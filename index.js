var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
<<<<<<< HEAD
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
function currentLine(katzDeliLine){
  // can also be done using arr.join(', ') to add commas.
  let line = "The line is currently: ";
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  
  for(let i = 0; i < katzDeliLine.length; i++){
    line += `${i + 1}. ${katzDeliLine[i]}${ i < katzDeliLine.length - 1 ? ', ' : ''}`
  }
  
  return line;
=======
  // for(let i = 0; i < katzDeliLine.length; i++){
    
  // }
  return ``
>>>>>>> 34a5b518865f1fb7121cf9ea68f736b45dd74c3c
}