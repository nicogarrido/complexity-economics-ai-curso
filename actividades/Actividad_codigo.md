# Actividad: ¿de qué depende el resultado?

Duración: 15 minutos, del minuto 70 al 85 de la segunda clase (20 minutos en la versión de 150). Trabajo individual. No se necesita experiencia de programación.

## Para qué sirve
Acumular conocimiento no consiste en agregar reglas. Consiste en conservar formulaciones explícitas, saber qué resultados dependen de ellas y poder revisar una explicación sin perder lo aprendido. En esta actividad revisamos un supuesto auxiliar de la regla de reconocimiento: el +1.

## Hipótesis en palabras
Los clientes eligen empresas conocidas, pero todas tienen una visibilidad de base. ¿Cómo cambia el resultado si aumenta esa base?

1. Selecciona B, inicio igual, capacidad 200, tu semilla (42, 43 o 44) y 50 períodos. Inicia, ejecuta y guarda la comparación original.
2. Abre «Leer y modificar el código». Pide a la IA: «Explícame Math.pow(v+1,q.alpha): qué representan v y alpha, cómo se convierte el peso en probabilidad y qué cambiaría con v+5. No ejecutes ni inventes resultados. Ayúdame a formular una predicción».
3. Escribe tu predicción. Cambia solo `Math.pow(v+1,q.alpha)` por `Math.pow(v+5,q.alpha)`. Aplica el código; el escenario vuelve al período 0.
4. Ejecuta 50 períodos con las mismas condiciones y guarda la nueva comparación. Examina Gini, empresa mayor y trayectoria. Compartan los resultados en el curso.
5. Descarga el registro JSON: conserva el código de cada escenario.

## Qué significa la modificación
Con B, el peso original es v+1 y el modificado v+5. Para empresas con ventas 10 y 20, los pesos pasan de 11 y 21 a 15 y 25: disminuye la ventaja relativa de la mayor. Esto sugiere una hipótesis sobre la distribución; no garantiza cada resultado aleatorio. Con A, alpha es cero y ambos pesos son uno: sirve como control. La semilla igual facilita reproducir, pero no sustituye varias repeticiones.

## Acumular: qué conservamos y qué revisamos
Qué resultado depende del supuesto +1: ________________________________
¿Es un supuesto del mecanismo o un detalle de implementación? ___________
A la luz de E2, ¿hace falta el reconocimiento para explicar la persistencia de la desigualdad, o podríamos retirar ese mecanismo o simplificar el modelo? ________________________________

## Discusión desde el realismo trascendental
La regla formaliza un mecanismo hipotético. Un cambio en la distribución simulada demuestra una consecuencia dentro del modelo, no la existencia de ese mecanismo en Chile. ¿Qué evidencia independiente permitiría evaluar la visibilidad de base? ¿Qué condiciones podrían impedir que opere?

## Si aparece un error
Lee el mensaje, pide a la IA que explique la causa y revisa el cambio. Puedes restaurar el original. Aplicar comprueba un período y la estructura básica de las compras; esas comprobaciones son parciales. Mantén el nombre Mercado y sus métodos; la interfaz está diseñada para 20 empresas y 200 clientes.
