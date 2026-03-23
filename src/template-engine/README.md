# Kata Template Engine
## Objetivo: Implementa un motor de plantillas muy sencillo.

### Entradas
 - Una cadena de texto con plantilla que contiene variables entre llaves {{variable}}

        "Hola {{nombre}}, tienes {{edad}} años."

 - Un diccionario, {"clave":"valor"} 

       {"nombre": "German", "edad": 35}

### Salida 
- La misma cadena con las variables reemplazadas por sus valores:

        "Hola German, tienes 35 años."

### Requisitos
 - Reemplazo simple: Sustituye {{nombre}} por el valor del diccionario

 - Variables no reemplazadas: Si la variable no se encuentra en el diccionario, no se debe reemplazar en la plantilla.

 - Variables inexistentes: Si la variables del diccionario no se encuentra en la plantilla, se ignora.
 
 - Diccionario o texto nulos: 


#### Casos de prueba mínimos

    Template: "Hola {{nombre}}", Diccionario: {"nombre": "Mundo"} // => "Hola Mundo"

    Template: "Edad: {{edad}}", Diccionario: {"edad": 42} // => "Edad: 42"

    Template: "Sin valor: {{inexistente}}", Diccionario: {"nombre": "Test"} // => "Sin valor: {{inexistente}}" 
