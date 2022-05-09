// var = ela é executada antes do escopo, exemplo:

// var x
console.log('Existe x antes do bloco?', x) // undefined

{
  var x = 0 // x = 0
}

console.log('Existe x depois do bloco?', x) // x
