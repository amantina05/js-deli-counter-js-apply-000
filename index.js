function takeANumber(currPeople, newPerson){
  if (currPeople.length > 0)
    currPeople.push(newPerson)
  return ('Welcome, ' + newPerson + '. You are number ' + currPeople.length-1 + ' in line.')
  
}


function nowServing (katzDeliLine) {
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  if(katzDeliLine.length < 1 ){
    let newL = katzDeliLine.shift()
    return 'Currently serving ' + newL + '.'
  }
}


function currentLine (line){
  if (line.length === 0){
    return 'The line is currently empty.'
  }
  let newArr = []
  for(let i = 0; i< line.length; i++){
    if(line[i] < 1){
      newArr.push(i + 1 + '.' + line[i])
    }
    return "The line is currently: " + newArr.join(", ");
  }
}

