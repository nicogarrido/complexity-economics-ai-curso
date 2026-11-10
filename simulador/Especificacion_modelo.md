# Modelo didáctico 1.0: especificación

## Alcance
Explora reglas de elección y capacidad en empresas ficticias. No está calibrado para Chile. Períodos abstractos, compras de valor unitario, sin UF. No hay correspondencia directa con tramos SII ni IA incorporada.

## Agentes y entorno
20 empresas con identidad, ventas anteriores y capacidad K. Aceptan y registran compras mientras tienen capacidad: son agentes mínimos sin decisiones de precios. 200 clientes con identidad y proveedor anterior. Cada uno compra una unidad por período. No hay entrada, salida, precios, beneficios ni aprendizaje.

## Inicio
Igual: 10 clientes por empresa. Concentrado: 100 clientes en empresa 1 y otros 100 distribuidos cíclicamente entre empresas 2–20 (cinco o seis cada una). Las ventas iniciales son esos recuentos. K opera desde período 1, no retroactivamente.

## Secuencia
1. Congelar ventas anteriores s_i y reiniciar ventas nuevas.
2. Permutar el orden de clientes (Fisher–Yates).
3. Para cada cliente, sortear uniforme. Si es menor que p y su proveedor previo tiene capacidad, conservarlo.
4. De otro modo, entre empresas disponibles, elegir con pesos (s_i+1)^a normalizados por su suma. El +1 mantiene elegibles empresas con cero ventas.
5. Registrar compra, ocupar capacidad y actualizar proveedor.
6. Al terminar, las ventas nuevas son el estado para el siguiente período.

Los pesos no se actualizan tras cada compra. La disponibilidad de capacidad sí. Fidelidad frustrada por capacidad conduce a elección ponderada entre disponibles. K mínimo=10 garantiza asignación de las 200 compras. El orden importa bajo capacidad limitada.

## Escenarios
A: a=0, p=0. B: a=1, p=0. C: a=0, p configurable. D: a=1, p configurable (extensión opcional). Los nombres son elección equiprobable, atracción por tamaño, fidelidad y combinación, respectivamente.

## Indicadores
Mayor = máximo de ventas / 200. Gini = suma de (2i-n-1)x_i dividida por n por suma de x_i, con ventas ordenadas ascendentemente e i desde 1. Incluye ceros. Activos = empresas con ventas mayores que cero. Historia desde período 0.

## Reproducción
Generador Mulberry32, semilla entera de 32 bits. Configuración, semilla, versión y número de pasos idénticos reproducen la trayectoria. Compartir semilla entre mecanismos no empareja cada decisión aleatoria: ramas diferentes consumen números de forma distinta. Repetir varias semillas sin seleccionar solo resultados favorables.

## Controles
Siempre sumatoria=200, ventas enteras no negativas y no mayores que K desde período 1. p=1 y K=200 conserva exactamente el inicio. K=10 produce 10 ventas por empresa porque capacidad total=demanda y todas las compras se asignan. Son controles de implementación, no de validez empírica.

## Operación
Abrir Simulador.html. Cambiar controles y pulsar Iniciar escenario. Avanzar 1 período muestra una muestra de decisiones. Ejecutar períodos añade los pasos al escenario activo. Guardar comparación conserva en memoria trayectoria y parámetros. Descargar registro JSON exporta escenario actual y comparaciones. Cerrar o recargar pierde registros no descargados. No se envían datos a servidores.
