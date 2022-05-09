## Cores
 Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros

## Valores
Podemos definir valores por:

* palavra-chave (palavra chave) (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```css

element {
    /* valores chave */
    color: valorCorrespondente;
}

/* <named-color> values */
   
   color: orange;
   color: yellow;
   color: blue;
   color: red;
   color: rebeccapurple;
   color: tan;
   color: currentcolor: (cor atual)

/*

<hex-color> values 0-9 e A-F vai de:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f 

*/

color: #090; /* RED, GREEN, BLUE */
color: #009900;
color: #090a;
color: #009900aa;



/*<rgb()> values */
color: rgb(34, 12, 64, 0.6); /* 0-255 */
color: rgba(34, 12, 64, 0.6);
color: rgb( 32, 12, 64 / 0.6);
color: rgba(32 12 64 / 0.3);
color: rgb(32.0 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/*
O quarto valor é o alfa, que serve para
controlar a intensidade que uma cor pode
chegar, podem ser em decimal ou porcentagem
*/

/* 
0 = super escuro
255= maior tom da cor 
*/



/* <hsl()> values */
/* HSL → Hue - Saturation - Lightness */

color: hsl(180, 100%, 50%, 60%);
color: hsla(180, 100%, 50%, 60%);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.0 100% 50% / 60%);
color: hsla( 30.2 100% 50% / 60%);

/* Pesquisar HSL no google */

/* Global values */
color: inheritr; /* Herda a cor do elemento anterior */
color: initial; /* Volta a sua cor inicial */
color: unset; /* Pega a cor do contexto */

```


## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

https://convertacolor.com




