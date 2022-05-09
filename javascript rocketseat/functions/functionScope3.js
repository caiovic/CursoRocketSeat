let subject

function createThink() {
  subject = 'Study'
}

console.log(subject) // Undefined
console.log(createThink()) // undefined, pois ela não possui retorno
console.log(subject) // "Study"
createThink() // nada
