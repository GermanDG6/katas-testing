# El juego de la vida

El objetivo del juego es crear un sistema que simulase la vida y su naturaleza impredecible.
La vida se representa en una cuadrícula de celulas, en las que algunas están vivas y otras muertas, y cada celula tiene 8 celulas vecinas (vertical, horizontal y diagonales).

## Reglas:

- Las células vivas con menos de dos vecinos, muere por despoblación.
- Las células vivas con mas de tres vecinos, muere por superpoblación.
- Las células vivas con dos o tres vecinos, sobreviven.
- Las células muertas con exactamente 3 vecinos, resusitan.
