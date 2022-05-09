// Function Hoisting
// é como se o javascript reorganizasse o código, colocando a function acima de sua chamada:

sayMyName() // Caio

function sayMyName() {
  console.log('Caio')
}

// caso ela fosse uma função anônima, aí teria problemas:

/*
 primeira versão: erro - não é possivel executar antes da declaração
 const sayMyName = function() {
   console.log('Caio')

 Segunda versão: erro - o var sube como undefined, logo, da erro de não definido

 terceira versão: com let daria erro também
}





*/
