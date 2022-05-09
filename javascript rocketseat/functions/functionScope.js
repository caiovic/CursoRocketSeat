// o escopo dentro da função não substitui o que estiver do lado de fora, isso caso tenha um parâmetro

let subject = 'Create video'

function createThink(subject) {
  subject = 'Study'
  return subject
}

console.log(subject) // "Create a video"
console.log(createThink(subject)) // study - o parâmetro muda quando entra na function
console.log(subject) // "Create a video"

//  caso um parâmetro não seja criado, o escopo de fora se transorma no que está dentro da function

// obs: toda função sem return é undefined
