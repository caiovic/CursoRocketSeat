// reduzindo o número de casa decimais
let number = 4578.78894
console.log(number.toFixed(2)) // 4578.79

// trocando ponto por vírgula:
console.log(number.toFixed(2).replace('.', ',')) // 4578,79 - o dado passa a ser uma string, porém da para mudar a propriedade para number novamente usando Number, porém, o resultado seria um NaN

// usar o replace só é possível pois ao usar o toFixed o número passa a ser uma string

let nome = 'caio'
console.log(nome.replace('c', 'K')) // Kaio
