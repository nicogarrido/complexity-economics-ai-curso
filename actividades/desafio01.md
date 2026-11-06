# Desafío 01 — Distribución del tamaño de empresas chilenas

## Objetivo

Describir cómo se distribuyen las empresas según ventas anuales estimadas por el SII y cómo cambia esa distribución entre años. El trabajo común cubre E01–E02. En la siguiente clase desarrollaremos E03–E06 como continuación guiada, sin anticipar resultados.

## Datos y acceso

La versión de referencia del desafío declara extracción octubre de 2025, años comerciales 2005–2024. Descargar directamente de las fuentes oficiales y comprobar notas y versión:

- [Página de estadísticas de empresas del SII](https://www.sii.cl/sobre_el_sii/estadisticas_de_empresas.html).
- [PUB_TRINT.xlsb, nacional por 18 tramos](https://www.sii.cl/sobre_el_sii/empresas/PUB_TRINT.xlsb).
- [PUB_TRINT_RUBR.xlsb, extensión por rubro](https://www.sii.cl/sobre_el_sii/empresas/PUB_TRINT_RUBR.xlsb).

Los enlaces pueden actualizarse. Si la extracción difiere, registrar la fecha y consultar antes de combinar versiones. Conservar el original y trabajar sobre una copia. El formato XLSB requiere software compatible. Documentar cualquier conversión a CSV o XLSX.

Huellas de las copias usadas para preparar el desafío:

- Nacional SHA-256: `335318dc6bfb26b7773dde6aca892a501f1e70aae5c636f929c7e17c55b1aa80`.
- Sectorial SHA-256: `7b3a358e833b29e48bd08fd7cf844bd4440bcc47f9fe923fb5f50903797eab7f`.

Copias de referencia disponibles en [datos/](../datos/), con procedencia SII y huellas en [manifest.json](../datos/manifest.json). La inclusión de estos archivos no les atribuye una licencia propia del curso.

[Presentación del desafío](../presentacion/Desafio_01_empresas_chilenas.pptx).

## Trabajo común

### E01. Año comercial 2024

Identificar la unidad de observación y las unidades monetarias. Revisar Datos y Notas. Elaborar frecuencias por tramo y acumuladas en fronteras. Distinguir proporciones de empresas y participaciones de ventas. Explicitar el tratamiento de ventas no estimables.

### E02. Comparación temporal

Comparar 2005, 2014 y 2024 como cortes sugeridos, ampliables a toda la serie. Mantener fronteras y denominadores comparables. Examinar cambios de cobertura y evitar interpretar los cortes agregados como trayectorias de las mismas empresas.

### Extensión voluntaria

Contrastar dos sectores y justificar su elección, comenzando por 2018–2024. Revisar reserva de información, clasificaciones y comparabilidad. Formular una hipótesis contrastable o proponer cómo evaluar modelos de cola. No es obligatorio ajustar modelos ni ejecutar bootstrap en esta primera entrega.

## Entrega propuesta para la próxima clase

Hasta cuatro páginas, con tres gráficos explicados, una tabla de hallazgos, código o instrucciones reproducibles, registro de observaciones/supuestos/limitaciones y una pregunta pendiente. Indicar archivos, versión, transformaciones, herramientas y uso de IA si corresponde. El docente puede ajustar modalidad y extensión.

Evaluación: comprensión de los datos, coherencia de cálculos y gráficos, respaldo de conclusiones y trazabilidad. No se exige una conclusión predeterminada.

