### Kata Markdown Transformer

En una editorial se han encontrado con el siguiente problema: 
Querían sacar una versión física de un libro que tenian en un fichero markdown. El problema era que los hipervínculos no tenian sentido en el libro físico, y la solución planteada era transformar los hipervínculos en notas al pie de la página. 

La sintaxis en un fichero markdown de un hipervínculo es la siguiente: 

    [visible text link](url)

Y en nota al pie se debe utilizar la siguiente sintaxis: 

    visible text link [^anchor1]
    [^anchor1] : url

Por ejemplo: 

    [this book](https://thisbook.com) and some text 
    this book [^anchor1] and some text 
    [^anchor1]: https://thisbook.com

También hay que tener en cuenta los siguientes casos: 

 - Pueden haber multiples enlaces en la misma página.
 - Pueden haber multiples enlaces que comparten la misma url
 - ...

