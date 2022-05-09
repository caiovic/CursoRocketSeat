## Page Layouts

Nessa aula vamos ver alguns dos métodos usados para posicionar os elementos na tela.

- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid

## Posicionamentos

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static (padrão) | relative | absolute | fixed

Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro,
a não ser no caso de elementos inline, que ficam um ao lado do outro.

## Relative

- O position indica onde o elemento vai ser posicionado na página. Ao usar
  o position podemos adicionar outras propriedades como top, right, bottom,
  left e z-index, que vão determinar o posicionamento final do elemento.

- Quando o position é relative os elementos são deslocados do seu posicionamento
  normal, mas sem afetar o posicionamento de outros elementos da página.

## Absolute

toma a linha de frente acima dos demais elementos

- Quando o position é absolute o elemento é deslocado saindo do fluxo normal.
  O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao
  bloco contendo a raiz do elemento.
- top, right, bottom, left e z-index

## Fixed

- Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo
  na página, independente do scrolling feito.

## Element Stacking (empilhamento)

- É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição
  do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

  O ultimo elemento tem mais força.

eixo y - altura
eixo x - largura
eixo z - empilhamento

basta colocar um valor superior de z-index que o elemento aparecerá na frente.
