## Enunciado :

Tu banco de toda la vida está cansado de su software de contabilidad hecho en COBOL y te ha contratado para que empieces desde cero tu greenfield project, y, además, nos dejan hacerlo con nuestra tecnología favorita.

Los requisitos
Nuestra aplicación debe permitir:

Hacer un depósito en la cuenta
Retirar de la cuenta
Imprimir los asientos de la cuenta a través de la consola
El resultado de imprimir los asientos debe ser como el siguiente:

Date | Amount | Balance

14/01/2022 | 2000.00 | 2500.00

13/01/2022 | -500.00 | 500.00

10/01/2022 | 1000.00 | 1000.00

La única restricción que tiene el ejercicio es que debemos respetar la interfaz de la clase que estás viendo y no podemos añadir ningún otro método público.

export class Account {
deposit(amount: number): void
withdraw(amount: number): void
printStatement(): void
}
