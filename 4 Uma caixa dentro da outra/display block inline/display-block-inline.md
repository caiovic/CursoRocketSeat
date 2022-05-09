## display: block; vs display: inline;

* Como as caixas se comportam em relação as outras caixas
* Comportamento externo das caixas


## Display Block

* Ocupa toda a linha, colocando o próximo elemento abaixo desse
* width e height são respeitados
* padding, margin, border irão funcionar normalmente, empurrando para baixo/lado
* <p> <div> <section>, todos os headings <h1> <h2>...
* para que tenha o mesmo comportamento que um `inline`, basta colocar no css por exemplo:
   span {
    display: inline;
   }

## Display Inline

* Os elementos ficam ao lado do outro e não empurram outros elementos para baixo
* width e height não funcionam 
* Somente valores horizontais de margin, empurrando somente para o lado
* <a> <strong> <span> <em>
* para que tenha o mesmo comportamento que um `block`, basta colocar no css por exemplo:
   span {
    display: block;
   }
 