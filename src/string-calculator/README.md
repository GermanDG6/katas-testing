## Enunciado

Esta kata nos propone la implementación de una función que realiza la suma de los elementos de una expresión que recibe como parámetro en forma de cadena de caracteres.

Esta expresión tiene algunas particularidades. Veamos los diferentes casos de uso que debemos cubrir:

- En el caso de recibir null o una cadena vacía, la función deberá devolver 0.

- En el caso de recibir sólo un número en formato string debe convertirlo a un tipo numérico y devolverlo.

- En el caso de recibir varios números debe devolver correctamente el resultado de la suma. Los números van a estar separados, por defecto, por comas.

- Podría darse el caso de que algunos de los elementos separados por comas fuese un carácter no numérico, como, por ejemplo, una letra. Estos valores no deberían afectar al resultado total.

- Por último, la función debe admitir separadores personalizados. Para ello, en la primera parte de la expresión se indicará la configuración. El principio de la configuración vendrá dado por una doble barra inclinada, luego el siguiente carácter sería el separador que ha escogido el usuario y el final de la configuración se indica con otra barra inclinada.
