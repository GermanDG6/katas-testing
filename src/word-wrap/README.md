Enunciado
Tu tarea es escribir una función que tome una cadena de texto y la divida en líneas, asegurándose de que ninguna línea exceda un número máximo de caracteres especificado.

La función debe insertar saltos de línea en los lugares adecuados para ajustar el texto.

Requisitos
Si una palabra es más larga que el límite de caracteres, debe dividirse en dos líneas.
Los espacios tienen preferencia sobre el ancho de columna, dividiendo por espacios.
No se deben dejar espacios innecesarios al final de las líneas.
Para los casos de recibir una cadena de texto vacía o nula, debe devolver una cadena de texto vacía.
Si se recibe un acho de columna negativo debe devolver una excepción.

wordWrap('',5) ⇒ ''
wordWrap('hello',5) ⇒ 'hello'
wordWrap('longword',4) ⇒ 'long\nword'
wordWrap('reallylongword',4) ⇒ 'real\nlylo\nngwo\nrd'
wordWrap('abc def',4) ⇒ 'abc\ndef'
wordWrap('abc def ghi',4) ⇒ 'abc\ndef\nghi'
wordWrap(' abcdf',4) ⇒ '\nabcd\nf'
wordWrap(null,5) ⇒ ''
wordWrap('hello',-5) ⇒ throw exception
