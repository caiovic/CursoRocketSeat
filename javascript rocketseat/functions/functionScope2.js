// caso não tenha um parâmetro estabelecido, aí a variável do lado de fora muda, mas só depois da função ser executada

let subject = 'Create video'

function createThink() {
  subject = 'Study'
  return subject
}

console.log(subject) // "Create a video"
console.log(createThink(subject)) // "Study" - o parâmetro muda quando entra na function
console.log(subject) // "Study"
