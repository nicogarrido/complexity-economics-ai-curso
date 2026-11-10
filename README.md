# Explicación y modelización económica con inteligencia artificial

Materiales para estudiantes de un curso de dos clases. Usamos los modelos de agentes como lenguaje para formular, confrontar e integrar explicaciones económicas, con la IA como interlocutora durante el trabajo. No se necesita programar ni preparar nada antes de clase.

## Qué usar en cada momento

**Clase 1 · formular**

1. Datos: [`datos/Datos_SII_2024.csv`](datos/Datos_SII_2024.csv) es el extracto de 2024 para subir o pegar en tu asistente de IA (ficha F1, consigna IA-1). La tabla legible está en [`datos/Datos_SII_2024.md`](datos/Datos_SII_2024.md) y el original completo del SII en [`datos/PUB_TRINT.xlsb`](datos/PUB_TRINT.xlsb).
2. Fichas: [`actividades/Cuaderno_estudiante.pdf`](actividades/Cuaderno_estudiante.pdf) para imprimir, o la [versión de texto](actividades/Cuaderno_estudiante.md).
3. Consignas para la IA: [`actividades/Instrucciones_IA.md`](actividades/Instrucciones_IA.md). Copia IA-0 al empezar y luego la consigna de cada actividad.
4. Simulador: [`simulador/Simulador.html`](simulador/Simulador.html). Ver abajo cómo abrirlo.

**Clase 2 · confrontar, integrar y acumular**

- El mismo simulador, las fichas F5 a F8 y la [actividad de código](actividades/Actividad_codigo.md).

Las presentaciones de ambas clases están en [`presentaciones/`](presentaciones/).

## Cómo abrir el simulador

1. Abre [`simulador/Simulador.html`](simulador/Simulador.html) y pulsa **Download raw** (icono de descarga).
2. Abre el archivo descargado con tu navegador. Funciona sin internet y sin instalar nada.
3. Guarda tus comparaciones y descarga el registro JSON antes de cerrar la pestaña.

Las reglas completas del modelo están en [`simulador/Especificacion_modelo.md`](simulador/Especificacion_modelo.md).

## Cómo descargar los datos

Abre el archivo dentro de [`datos/`](datos/) y pulsa **Download raw**. El CSV se puede subir directamente a la mayoría de los asistentes de IA. El formato XLSB del original requiere una herramienta compatible; conserva el original y documenta cualquier conversión. Procedencia y notas en [`datos/README.md`](datos/README.md).

## Distinciones del curso

- Los datos del SII son evidencia agregada: nos dicen qué explicar. No ajustamos el modelo a ellos.
- El simulador genera compras ficticias bajo hipótesis explícitas. Sus resultados no son datos sobre Chile.
- La IA acompaña el trabajo. Registra qué propuso, qué decidiste y cómo lo comprobaste.

## Organización

`datos/`: originales del SII, extracto 2024 y procedencia. `actividades/`: fichas, consignas para IA y actividad de código. `simulador/`: simulador y especificación. `presentaciones/`: diapositivas de las dos clases. `codigo/`: motor del modelo y pruebas, opcional.
