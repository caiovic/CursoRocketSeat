// Callback function é quando uma function é passada como parâmetro de outra function

function sayMyName(nomeCallBack) {
  console.log('Antes da execução do callback')

  nomeCallBack() // name passa a ser o nome da callback

  console.log('Depois da execução do callback')
}

//sayMyName(() => {
// console.log('Estou em uma callback')
// })

sayMyName(function () {
  console.log('Estou em callback')
  console.log(1 + 2)
})

// o parâmetro vira uma function

// basicamente é criar uma arrow function dentro da function ou uma function comum mesmo
