// Manipulando strings e arrays

/* 
 Separe um texto que contém espaços, em um novo array onde cada
 texto é uma posição do array. Depois disso, transforme o array
 em um texto e onde eram espaços, coloque _
*/

// string em array
let frase = 'Prazer meu nome é Caio!'
let meuArray = frase.split(' ') // é possível separar por qualquer coisa presente na string
console.log(meuArray) // [ 'Prazer' 'meu', 'nome', 'é', 'Caio!' ]

// array em string
let fraseComAnderline = meuArray.join('_')
console.log(fraseComAnderline) // Prazer_meu_nome_é_Caio!
