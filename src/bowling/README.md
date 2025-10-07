# Kata bowling

El objetivo del juego es sumar el máximo número de puntos. Estos puntos se consiguen tras 1 o 2 intentos que se tiene en cada turno para derribar los 10 bolos.

### Strike:

    - Si el jugador tira todos los bolos en 1 solo intento. Suma 10 puntos + el número de bolos derribados en los siguientes 2 lanzamientos de los siguientes turnos.

### Spare:

    - Si el jugador tira los 10 bolos en los 2 intentos. Suma 10 puntos + el número de bolos derribados en el siguiente intento del siguiente turno.

### OpenFrame:

    - Si no tira los 10 bolos en los 2 intentos. Suma el número de bolos derribados.

### Décimo turno:

    - Si el jugador tiene strike o spare, tiene lanzamientos adicionales. En el décimo turno solo se pueden lanzar 3 bolas.
