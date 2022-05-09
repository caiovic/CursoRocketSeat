// let e const são locais e só funcionam no escopo onde foi criada:

// console.log('Existe y antes do bloco?', y) // error: y is not defined

// OBS: caso crie uma let ou const com o mesmo nome fora do escopo, elas seriam tratadas como variáveis diferentes.

{
  /* console.log(
    'Executando ante ele saberia que existe y, porém, não o puxa para cima',
    y ) */ // Cannot access 'y' before initialization

  let y = 0

  console.log('Aqui existe y', y) // 0
}

console.log('Existe x depois do bloco?', y) // error: y is not defined

// OBS: Caso a variável (let) seja criada fora do escopo porém atualizada depois dentro dele, o valor fora também seria atualizado nas seguintes execuções. Isso não ocorre com const
