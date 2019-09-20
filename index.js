function takeANumber(currPeople, newPerson){
  let newArr = []
  let newPerson = 'Ada'
  let index = 1
  newArr.push('Welcome, ' + newPerson + '. You are number ' + index + ' in line.')
  return newArr
}

// describe('deli', () => {
//   describe('takeANumber', () => {
//     var katzDeli;
//     var otherDeli;

//     beforeEach(() => {
//       katzDeli = [];
//       otherDeli = ["Steven", "Blake", "Avi"];
//     });

//     it('adds a person to the line', () => {
//       expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
//       expect(katzDeli).toEqual(['Ada']);
//     });

//     it('appends the person the end of the line if there are already people on it', () => {
//       expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
//       expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
//     });

//     it("properly handles multiple people being added", () => {
//       takeANumber(katzDeli, 'Ada');
//       takeANumber(katzDeli, 'Grace');
//       takeANumber(katzDeli, 'Kent');

//       expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
//     });
//   });
  
// 1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

function nowServing (katzDeliLine) {
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  if(katzDeliLine.length < 1 ){
    let new = 
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.unshift()
  }
}

  // describe('nowServing', () => {
  //   it('returns the line is empty when no one is on line', () => {
  //     expect(nowServing([])).toEqual("There is nobody waiting to be served!");
  //   });

  //   it('returns an announcement about the person it is serving, and shifts the line', () => {
  //     const deliLine = ["Steven", "Blake", "Avi"]
  //     expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
  //     expect(deliLine).toEqual(["Blake", "Avi"]);
  //   });
  // });
  
  
// 2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

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

