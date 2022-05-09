/*
  
  type conversion (typecasting) Vs. Type coersion

*/

// type coersion - transformou o number em uma string
console.log('9' + 5) // 95

// type coersion - transformou o number em uma string
console.log(5 + '9') // 59

// type conversion - conversão manual para um number
console.log(Number('9') + 5) // 14

// type conversion - conversão manual para uma string
console.log(String(5) + '9') // 59

// conversão de string pra number e vice versa
let number = 123
console.log(String(number))
let string = '123'
console.log(Number(string))
