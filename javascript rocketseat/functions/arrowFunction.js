// arrow function

const sayMyName = name => {
  console.log(name)
}

sayMyName() // undefined
sayMyName('Caio') // 'Caio'

// arrow function não sofre hoisting

// geralmente é atribuído em uma constante
