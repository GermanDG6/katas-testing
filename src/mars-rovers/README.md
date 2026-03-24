# Kata Mars Rovers

La NASA va a aterrizar un escuadrón de rovers robóticos en una meseta rectangular de Marte.

Tu tarea es desarrollar una API que permita mover estos rovers por la meseta según una serie de comandos recibidos desde la Tierra.

### Representación del escenario

La meseta se representa como una cuadrícula rectangular de tamaño fijo (por ejemplo, 10×10).

Cada rover tiene una posición identificada por:
 - coordenada X,
 - coordenada Y,
 - y una orientación (N, S, E, W).
 
          Ejemplo: la posición 0 0 N indica que el rover está en la esquina inferior izquierda mirando al norte.

### Comandos que recibe el rover

El rover recibe una cadena de comandos, donde cada carácter es una instrucción:
 - F: avanza una casilla en la dirección en la que está orientado, manteniendo la orientación.
 - L: gira 90 grados a la izquierda sin moverse de casilla.
 - R: gira 90 grados a la derecha sin moverse de casilla.

            Ejemplo: 'FRFLF' indica que el rover debe avanzar, girar a la derecha, avanzar, girar a la izquierda y luego avanzar nuevamente.

### Reglas de movimiento

Cuando el rover avanza (F), su nueva posición se calcula según la orientación:

 - N:(x,y+1)
 - S:(x,y-1)
 - E:(x+1,y)
 - W:(x-1,y)

Si el rover intenta salirse de la meseta, el rover rodea el eje de coordenadas y aparece en el lado opuesto. Por ejemplo: 
 - Si el rover está en la posición "0:0:N" y recibe el comando 'F', su nueva posición será "0:9:N" (asumiendo una meseta de tamaño 10×10).

## Salida esperada
Después de ejecutar todos los comandos de una secuencia, el programa debe devolver la posición final del rover en un formato como:
        
    "2:3:N" (coordenadas X, Y y orientación final).

### Opcional (versión avanzada)
 - La meseta puede contener obstáculos en ciertas coordenadas.
 - Si un comando de movimiento M haría que el rover colisione con un obstáculo, el rover se detiene en la última posición posible y el sistema debe informar del obstáculo, por ejemplo anteponiendo una marca como O: al resultado final.

