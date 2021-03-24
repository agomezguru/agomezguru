---
title: Separación de funciones
category: DevOps
post-date: 12/Feb/2021
reading-time: 6 min
blurb: DevOps y separación de funciones
---

A pesar del rápido crecimiento de las prácticas de DevSecOps en varias industrias, todavía parece haber una gran cantidad de temor, particularmente entre los profesionales de la seguridad y los auditores. Una de las primeras preocupaciones que surge es un "¡No puedes hacer DevSecOps aquí!" ¡Viola la separación de funciones! " Curiosamente, esta afirmación es generalmente incorrecta y se deriva de un malentendido general sobre DevSecOps, la automatización y la canalización de integración / implementación continua (CI / CD).

Mito: DevSecOps viola la separación de funciones.
¿Qué es la “separación de funciones”?
En primer lugar, puede resultar útil comprender qué es la “separación de funciones” (también conocida como “separación de funciones”) y para qué sirve. Puede leer varios informes que definen la separación de funciones de Wikipedia, SANS y AICPA. La separación de funciones es un control interno destinado a reducir la incidencia de errores y fraude en un sistema. Básicamente, la creencia es que tener 2 o más personas involucradas en la creación y revisión de cambios (ya sea de código o de configuración) es un resultado positivo neto. Me gusta la definición de AICPA:

“El principio de SOD se basa en responsabilidades compartidas de un proceso clave que distribuye las funciones críticas de ese proceso a más de una persona o departamento. Sin esta separación en los procesos clave, los riesgos de fraude y error son mucho menos manejables ".

En general, es útil tener un par de ojos extra sobre varios cambios del sistema. Sin embargo, hay una brecha evidente en la separación de funciones, que es que no explica (y no puede) la colusión. Por lo tanto, en entornos de equipos más pequeños, aún es posible que los errores y el fraude sobrevivan a la producción, a pesar de que se haya implementado el control interno.

Es importante comprender la propuesta de valor central representada por este control interno, porque le permitirá explicar a los auditores cómo la automatización aún respalda los objetivos de CI / CD y auditoría.

2 mitos de la separación de funciones con DevSecOps
Mito 1: DevOps + CI / CD significa avanzar directamente a la producción

En primer lugar, si profundiza en las preocupaciones sobre el cumplimiento de los requisitos de separación de tareas en DevSecOps, a menudo encontrará que las personas de seguridad y auditoría probablemente estén mal informadas. Existe la impresión errónea de que tener una canalización de CI / CD en su lugar significa que los desarrolladores están impulsando el código directamente desde su IDE a la producción sin supervisión ni pruebas. Irónicamente, nada podría estar más lejos de la verdad. De hecho, la mayoría de las organizaciones con una canalización de CI / CD no tienen un sistema completamente automatizado sin intervención humana. Además, en la mayoría de las organizaciones es sumamente raro que solo una persona administre todo, desde el desarrollo hasta las pruebas, las operaciones y la implementación. Todas las nuevas empresas, excepto las más pequeñas, suelen tener al menos 1-2 ingenieros para codificar y una persona de operaciones para manejar la gestión del entorno (y la implementación).

Mito 2: La separación de funciones es eficaz para detener el fraude y los errores

Una cosa que sabemos más allá de toda duda razonable es que los errores en los sistemas continúan ocurriendo sin importar cuánta separación de funciones exista. En cuanto al fraude, DevSecOps y CI / CD facilitan la detección del fraude. Como tal, si bien tener un par de ojos adicional absolutamente * es beneficioso * para reducir errores, siempre habrá un punto de rendimientos decrecientes. Además, los humanos no pueden alcanzar la velocidad necesaria para mantenerse al día con el ritmo moderno de los negocios.

Cumplimiento de separación de funciones en DevSecOps + CI / CD
La arquitectura referenciable típica para DevSecOps y CI / CD

Separación de funciones de DevSecOps

En New Context, nos encontramos con muchos clientes que tienen una excelente canalización de CI / CD, pero aún requieren algún nivel de intervención humana. Después de interactuar con New Context mediante el uso de nuestra plataforma LS / IQ, las organizaciones recibirán orientación sobre cómo implementar una canalización de CI / CD referenciable exitosa.

Recomendaciones
El IDE debe tener controles integrados tipo pelusa para la calidad y seguridad del código.
El repositorio debe escanearse de forma periódica y recurrente mediante una herramienta de prueba de seguridad de aplicaciones estáticas (SAST) y una herramienta de análisis de composición de software (SCA) (SCA comprueba las bibliotecas y las funciones / métodos en busca de versiones con vulnerabilidades conocidas).
Más adelante en la canalización, utilice pruebas de seguridad de aplicaciones dinámicas (DAST) además de las pruebas de calidad de código estándar.
Las pruebas de UAT también pueden automatizarse en gran medida, especialmente cuando se aprovecha una metodología de desarrollo impulsado por pruebas (TDD).
Las configuraciones de infraestructura también se pueden automatizar y verificar utilizando herramientas como terraform y kitchen-terraform. Además, las imágenes o los contenedores deben reforzarse previamente con las herramientas de seguridad adecuadas integradas en las imágenes o el entorno de alojamiento (como sidecars para contenedores).
Todas estas herramientas y pruebas generarán resultados que deben introducirse en su rastreador de problemas (por ejemplo, JIRA, Pivotal)
Para terminar, destacamos que los conflictos como el que se describe aquí entre las iniciativas de DevSecOps y la seguridad o la auditoría pueden abordarse de manera razonable, pero solo si todas las partes están dispuestas