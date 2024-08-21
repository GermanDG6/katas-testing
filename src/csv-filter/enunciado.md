### KATA: CSV FILTER

## Reglas de negocio

- Es válido que algunos campos estén vacíos, apareciendo dos comas seguidas o una coma final.

- El número de factura no puede estar repetido, si lo estuviese eliminaremos todas las líneas con repetición.

- Los impuestos IVA e IGIC son excluyentes, es decir, sólo puede aplicarse uno de los dos. Si alguna línea tiene contenido en ambos campos debe quedarse fuera.

- Los campos CIF y NIF son excluyentes, sólo se puede usar uno de ellos.

- El neto es el resultado de aplicar al bruto el correspondiente impuesto. Si algún neto no está bien calculado la línea se queda fuera.
