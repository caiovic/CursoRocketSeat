# a cascata (cascating)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores:

1. Origem do estilo
2. Especificidade
3. Importância



## Origem do estilo

inline > tag style > tag link



## Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem 
valores a serem considerados.

0. Universal selector *{}, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="Radio"])
100. ID selector
1000. Inline

Os mais fracos são universal selector, combinators e negation pseudo-class, com o valor de 0. Em seguida, com valor de 1, são os element type selector e pseudo-elements.

Também temos os classes e attribute selectors, com valor de 10, ou seja, são mais fortes que os anteriores.

O segundo mais forte, ID selector, com um valor de 100, vence todos os selectors anteriores.

Por fim, temos o inline, com o valor 1000, quaisquer desses selectors anteriormente citado



### A regra !important
- ele da prioridade, mesmo que seja o mais fraco.
- nunca usar, a não ser que esteja usando a biblioteca de outra pessoa. 

* cuidado, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata
