# F1 · Fenómeno y evidencia

## Recorrido de 120 minutos por clase

Clase 1 (formular): F1, F2, F3 y primera comparación F5. Clase 2 (confrontar, integrar y acumular): F5, F6, actividad de código, F7 y F8. F4 y la parte E3 de F6 son extensiones opcionales para clases de 150 minutos. No se exige trabajo previo.

## Datos de trabajo

SII, año comercial 2024. Empresas con ventas positivas estimadas: 1.226.386. De ellas, 909.469 están en tramos de hasta 2.400 UF anuales (74,2%). Otras 356.419 están en la categoría de ventas no estimables y se excluyen de ese denominador. Una fila del archivo es año por tramo, no una empresa.

## Identificación

Grupo: __________________ Integrantes: __________________ Fecha: __________

## Pregunta de apertura

¿Cómo decidirías que una explicación económica es mejor que otra? Responde en dos o tres líneas, sin buscar la respuesta correcta. La retomaremos al final de la segunda clase.
________________________________________________________________
________________________________________________________________

## Actividad con IA-1

Abre Datos_SII_2024.csv (carpeta estudiantes) y súbelo o pégalo en tu asistente. Pide a la IA que reproduzca el 74,2 % y comprueba su cálculo a mano o con calculadora. Redacta una observación comprobable, una interpretación posible y una afirmación que estos datos no permiten sostener. Pregunta a la IA qué falta, pero no aceptes cifras nuevas sin fuente.

## Registro

Observación: ____________________________________________________
Interpretación: __________________________________________________
Una relación concreta que la tabla no muestra (lo retomaremos en F7): ______
Denominador y unidad: ____________________________________________

## Marco de investigación

¿Qué acontecimientos quedan fuera del registro? ¿Qué mecanismo propondrías investigar? No confundas el dato, el mecanismo hipotético y una futura salida simulada.

## Uso de IA

Propuesta de la IA: ______________________________________________
Decisión del grupo y verificación: __________________________________

## Fuente

Extracto: Datos_SII_2024.csv. Original: PUB_TRINT.xlsb, hoja Datos, filas 348–365 y hoja Notas. https://www.sii.cl/sobre_el_sii/estadisticas_de_empresas.html

# F2 · De la frase a la regla

## Dos explicaciones en lenguaje natural

Reconocimiento: «los clientes eligen empresas conocidas». Vínculo: «los clientes mantienen vínculos con sus proveedores».

## Actividad con IA-2 e IA-3

Identifica qué deja abierto cada frase: ¿conocidas por quién y en qué medida?, ¿el vínculo se mantiene siempre?, ¿qué ocurre si el proveedor no puede atender? Después formula cada explicación como un mecanismo y propón la regla que decidiría esas preguntas. No pidas a la IA que elija la verdadera sin evidencia. En el núcleo, desarrolla una explicación y resume la otra en una frase.

Explicación elegida (marca una): ☐ reconocimiento ☐ vínculo

## Explicación 1 · reconocimiento

Qué deja abierto la frase: ______________________________________
Regla propuesta: _______________________________________________
Condiciones en la economía (no en el modelo): __________________________
Evidencia que la debilitaría: _______________________________________

## Explicación 2 · vínculo

Qué deja abierto la frase: ______________________________________
Regla propuesta: _______________________________________________
Condiciones en la economía (no en el modelo): __________________________
Evidencia que la debilitaría: _______________________________________

## Comparar con el simulador

En el simulador, reconocimiento corresponde a B (atracción por tamaño: peso igual a ventas previas + 1) y vínculo a C (fidelidad: conservar el proveedor con probabilidad p si tiene capacidad). ¿Qué decidió la regla que tu frase dejaba abierto? ¿Habrías decidido lo mismo?
________________________________________________________________

## Pregunta retroductiva sobre la explicación

¿Qué tendría que ser cierto en la economía para que tu mecanismo pudiera operar? Esta pregunta formula una posibilidad. Todavía debes investigar si se cumple.

## Uso de IA

Qué aceptamos: __________________ Qué cambiamos: __________________
Por qué: ________________________________________________________

# F3 · Anatomía de un modelo de agentes

## Definición de trabajo

Un modelo de agentes representa entidades diferenciadas con estados y reglas de acción o respuesta, situadas en un entorno y vinculadas por interacciones. Su ejecución produce una trayectoria agregada. Un agente no necesita ser una IA.

## Completar antes de ejecutar

Agentes y cantidad: ______________________________________________
Estado que conserva cada tipo: ____________________________________
Reglas de decisión o respuesta: ___________________________________
Interacciones: __________________________________________________
Restricciones y entorno: __________________________________________
Secuencia de un período: _________________________________________
Qué observamos al final: _________________________________________

## Actividad con IA-4

Pide que revise si las reglas permiten ejecutar un período sin inventar decisiones. Después explica tú mismo una compra. Revisa la especificación entregada y corrige tu ficha.

## Dos distinciones

¿Qué diferencia hay entre la IA que usas y los agentes del modelo?
________________________________________________________________
¿Qué diferencia hay entre una empresa real y una empresa de esta simulación?
________________________________________________________________

## Modelo y mundo

Una regla es una hipótesis formal. Que el programa la ejecute correctamente no demuestra que describa el mecanismo real.

# F4 · Extensión opcional: un período a mano

## Miniatura del mismo modelo

Cuatro empresas A, B, C y D. Ocho clientes. Ventas anteriores: [4,2,1,1]. Fidelidad 0. Capacidad 8. Atracción por tamaño activa. Cada cliente compra una unidad. Congelar ventas anteriores durante todo el período.

## Regla

Pesos = ventas anteriores + 1: [5,3,2,2]. Total 12. Intervalos acumulados: A [0,5/12), B [5/12,8/12), C [8/12,10/12), D [10/12,1). El número de cada cliente determina su proveedor. Las fronteras pertenecen al intervalo de la derecha.

## Números suministrados

Clientes 1–8: 0,05; 0,43; 0,80; 0,20; 0,95; 0,60; 0,70; 0,35. Secuencia fijada solo para el ejercicio manual, no extraída de la semilla 42.

## Tu ejecución

Proveedores 1–8: _________________________________________________
Ventas finales [A,B,C,D]: __________________________________________
Suma de ventas: __________________________________________________

## Comparación

Con elección equiprobable los intervalos son cuatro cuartos iguales. Usa los mismos números. Proveedores: __________________________________
Ventas finales: __________________________________________________

## Revisión con IA-4

Compara después de resolver. ¿Se actualizan pesos tras cada compra? ______
¿Qué cambiaría si se actualizaran? __________________________________
¿Por qué ese cambio define otro modelo? _____________________________

# F5 · Experimento controlado

## Pregunta y predicción

Pregunta: _______________________________________________________
Predicción antes de ejecutar: ______________________________________
Qué resultado la pondría en duda: __________________________________

## E1 obligatorio

A frente a B. Inicio igual. Capacidad 200. 50 períodos. Semillas 42, 43, 44. A no usa tamaño ni fidelidad. B usa tamaño, sin fidelidad. Cambiar solo el mecanismo. Pulsar Iniciar escenario después de modificar controles. Cada grupo puede asumir una semilla y compartir sus resultados; no es necesario que todos ejecuten las seis combinaciones.

## Registro de resultados

Escenario / semilla / mayor empresa (%) / Gini / diferencia respecto del inicio
A / 42 / __________ / __________ / __________
B / 42 / __________ / __________ / __________
A / 43 / __________ / __________ / __________
B / 43 / __________ / __________ / __________
A / 44 / __________ / __________ / __________
B / 44 / __________ / __________ / __________

## Interpretación con IA-5

Qué ocurrió: ____________________________________________________
Qué depende de la semilla: ________________________________________
Qué podemos afirmar solo dentro del modelo: ________________________

## Trazabilidad

Guardar comparaciones y descargar JSON. Nombre del registro: __________
Qué propuso la IA y cómo lo verificamos: ____________________________

# F6 · Confrontar e integrar explicaciones

## Una alternativa como modificación

Cada explicación alternativa es un cambio identificable del modelo: cambiar una regla de decisión (de A a B), incorporar una relación (C, vínculo) o introducir una condición institucional (capacidad). Lo demás queda igual. Para cada modificación preguntamos qué aporta, qué contradice y bajo qué condiciones funciona.

## E2 · Confrontar: ¿producir o conservar? (núcleo)

A, B y C desde el inicio concentrado (la empresa 1 parte con el 50 % de las compras). Capacidad 200, 50 períodos. En C, fidelidad 0,9. Una semilla por grupo (42, 43 o 44); compartan resultados. Predice antes de ejecutar.

Escenario / semilla / mayor empresa al inicio / mayor empresa final / Gini final
A / ____ / 50 % / __________ / __________
B / ____ / 50 % / __________ / __________
C / ____ / 50 % / __________ / __________

¿Algún mecanismo produce desigualdad? ¿Alguno conserva la desigualdad inicial, o solo la hace durar más? Mira la trayectoria, no solo el valor final.
________________________________________________________________
Qué aporta C frente a A: ________________________________________
Qué contradice o no explica: ______________________________________

## Una explicación estándar como alternativa

En organización industrial, el vínculo con el proveedor se explica por costos de cambio: cada cliente elige el proveedor más conveniente, considerando lo que le cuesta cambiar. ¿Qué regla de C cambiaría para formularla? ¿Qué supone que nuestro modelo no tiene? No hace falta ejecutarla.
________________________________________________________________

## Integrar: escenario D (núcleo)

D combina ambos mecanismos: primero el vínculo (con probabilidad p el cliente conserva su proveedor); solo quien cambia elige por reconocimiento. Ejecuta D con fidelidad 0,5, inicio concentrado, capacidad 200, 50 períodos y tu semilla.

Predicción: _____________________________________________________
Mayor empresa final / Gini final: ___________________________________
Comparado con B y C por separado: __________________________________

## Integrar el programa no basta

Otra forma de combinar sería un solo peso que sume ventas previas y vínculo anterior. ¿Qué supone D sobre la interacción entre los dos mecanismos?
________________________________________________________________
Compatibilidad: ¿pueden ambas explicaciones valer para los mismos clientes? ______
Interacción: ¿se refuerzan, se sustituyen o actúan sobre clientes distintos? ______
Respaldo: ¿qué evidencia sostendría la combinación? _____________________

## Discusión con IA-6 e IA-6b

Propuesta de la IA: ______________________________________________
Decisión del grupo y verificación: __________________________________

## Extensión opcional: E3, una condición institucional

B, inicio igual, 50 períodos, semillas 42/43/44. Comparar capacidad 200 y 15.
Predicción: ______________________________________________________
Resultado: ______________________________________________________
Qué condición limita el mecanismo: _________________________________
Comprobaciones: C con fidelidad 1 y capacidad 200 debe conservar el inicio; capacidad 10 debe producir 10 compras en cada empresa desde el período 1. ¿Se cumplieron? __________
Con IA-7: ¿por qué introducir capacidad no convierte nuestra simulación en la economía real? ¿Qué otros procesos podrían actuar simultáneamente?
________________________________________________________________

# F7 · Qué evidencia falta

## Volver al mundo

Parte de lo que anotaste en F1 sobre lo que la tabla no muestra. El archivo SII contiene agregados, no decisiones individuales de clientes ni relaciones cliente-proveedor. La simulación produce compras ficticias de valor unitario, no ventas anuales en UF.

## Actividad con IA-8

Diseña una investigación para distinguir reconocimiento, vínculo y su combinación. Solicita datos concretos y explica qué observación ayudaría a separar mecanismos. La IA no debe inventar disponibilidad de fuentes.

## Propuesta

Dato adicional y unidad de observación: _____________________________
Cómo lo obtendríamos: ____________________________________________
Observación esperada bajo reconocimiento: __________________________
Observación esperada bajo vínculo: _________________________________
Observación esperada si ambos interactúan: _________________________
Otra explicación que habría que considerar: _________________________

## Límites

¿Qué seguiría sin identificar esa evidencia? __________________________
¿Cambian las relaciones o instituciones en el tiempo? _________________
¿Qué fuente hemos verificado realmente? ____________________________

## Revisión

Propuesta de la IA: ______________________________________________
Corrección del grupo: _____________________________________________

# F8 · Contribución y revisión colectiva

## Entrega

Una conclusión de seis frases por grupo, más registro JSON con el código usado y ficha F3. Una frase por punto de la estructura siguiente. No se exige programar de forma autónoma.

## Estructura

1. Fenómeno y población. 2. Explicación y condiciones. 3. Reglas que la formulan y lo que deciden. 4. Alternativa o combinación ejecutada y resultado. 5. Qué aporta, qué contradice y qué evidencia falta. 6. Qué conservaríamos, qué revisaríamos y qué aportó la IA.

## Revisión con IA-9 y otro grupo

Afirmación central: _______________________________________________
Objeción recibida: ________________________________________________
Qué cambiamos y por qué: _________________________________________

## Criterios

Claridad de evidencia y supuestos; comprensión del modelo; mecanismo y condiciones; comparación controlada; límites y alternativas; trazabilidad del uso de IA. Cada criterio recibe 0 (ausente), 1 (parcial) o 2 (claro y justificado).

## Volver a la pregunta de apertura

Relee tu respuesta de F1. Después del curso, ¿qué agregarías o cambiarías?
________________________________________________________________

## Salida individual

Explica un período del modelo sin usar código: _______________________
Una cosa aprendida sobre explicación: ______________________________
Un supuesto del que depende nuestro resultado: _______________________
Una cosa que el resultado no demuestra: ____________________________

## Material de continuidad

Repositorio: https://github.com/nicogarrido/complexity-economics-ai-curso . Marco filosófico: Bhaskar, Una teoría realista de la ciencia. Este taller es una adaptación pedagógica de sus distinciones, no una demostración de la filosofía mediante simulación.