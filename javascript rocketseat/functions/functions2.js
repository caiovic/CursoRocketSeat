const sum = function (number1, number2) {
  let total = number1 + number2
  return total
} // sum = somar

let number1 = 45
let number2 = 70

// console.log(total) - antes de executar a função, daria erro
console.log(`O número 1 é ${number1}`)
console.log(`Onúmero 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)

// usando var, let ou const dentro da function, na hora de usar o console.log "total", daria erro, PORÉM, não usar.
