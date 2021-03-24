---
title: Docker intro
category: Contenedores
post-date: 16/Abr/2020
reading-time: 6 min
blurb: Introducción a los contenedores en Docker
---

## Bienvenida

Bienvenido a esta introducción a Docker y a todo un mundo de oportunidades por descubrir. Aquí aprenderás todos los conceptos básicos del uso de Docker. Codsas tales como imágenes, contenedores, mapeo de puertos, redes Docker, volúmenes, etiquetado de contenedores y un largo etcétera. Al final de esta introducción deberás sentirte cómodo con la funcionalidad básica de Docker.

Empezaré diciendo que los contenedores siempre han existido de alguna forma desde hace ya bastante tiempo, sin embargo, fue Docker quién pulió el diamante en bruto y los exhibió al mundo como la joya que ahora son, por ello los contenedores tal como los concibió Docker se han convertido en sinónimo de la palabra "contenedor" debido a su gran popularidad. Los contenedores Docker han facilitado que muchos desarrolladores y equipos de operaciones creen, envíen e implementen su código. Por ello empezaremos nuestro largo caminar en el mundo de DevOps por aprender a utilizarlos de manera eficiente.

Pero, ¿por qué son tan populares? ¡Bienvenido! Estamos emocionados de que quieras aprender Docker. En este tutorial Docker voy empezar por lo básico te enseñaré a:

* Configurar tu área de trabajo con Docker (en esta página)
* Crear tu primera imagen y ejecútarla como un contenedor
* Escalar tu aplicación para ejecutar varios contenedores
* Distribuir tu aplicación a través de un clúster
* Ampliar los servicios agregando una base de datos backend
* Implementar tu aplicación en producción

---

## Conceptos de Docker

Docker es una plataforma para desarrolladores y administradores de servicios informáticos que permite desarrollar, implementar y ejecutar aplicaciones como servicio dentro de contenedores. El uso de contenedores Linux para implementar aplicaciones se denomina contenerización. Los contenedores no son nuevos, pero su uso para implementar aplicaciones fácilmente sí lo es.

La contenerización es cada vez más popular porque los contenedores son:

* Flexibles: incluso las aplicaciones más complejas se pueden contenerizar
* Ligeros: los contenedores aprovechan y comparten el kernel del host.
* Intercambiables: puede desplegar actualizaciones y upgrades en vivo
* Portátiles: puedes construirlos localmente, implementar en la nube y ejecutar en cualquier lugar.
* Escalables: puede aumentar y distribuir automáticamente réplicas de contenedores.
* Apilables: puede apilar servicios verticalmente y en vivo

Si bien los contenedores Docker pueden ser solo una tecnología de transición entre máquinas virtuales y unikernels (o algo similar), actualmente siguen siendo una de las formas más efectivas de empacar código, por lo que tener un conocimiento de Docker se ha convertido casi en un requisito para los ingenieros de software.

## Objetivos de aprendizaje en este capítulo

**Al finalizar la lectura y los ejercicios incluidos en este capítulo, deberás ser capaz de:**

* Entender cabalmente lo que Docker es
* Cómo crear tus propias imágenes de Docker
* Deberás poder asignar puertos entre Docker y el sistema operativo host
* Comprender los conceptos básicos de las redes en Docker
* Usar volúmenes para obtener almacenamiento persistente
* Deberías poder etiquetar eficazmente tus imágenes creadas

## Público objetivo

**Esta obra está dirigida a la siguiente audiencia:**

* Ingenieros DevOps
* Desarrolladores
* Ingenieros en Site Reliability
* Ingeniero de operaciones

## Recursos de aprendizaje

* Repositorio del curso en [Github](https://github.com/cloudacademy/introduction_to_docker)
* Instrucciones de instalación de [Docker](https://docs.docker.com/engine/installation/)
* IDE empleada en los ejercicios: [Visual Studio Code](https://code.visualstudio.com/)
* Documentación de referencia para crear un [Dockerfil](https://docs.docker.com/engine/reference/builder/)
* Sitio web oficial del CMS empleado como ejemplo: [Drupal](https://www.drupal.org/)

XaaS: Todo como servicio

## Introducción

El curso se basa en el marco de trabajo ITIL v2011, como guía de trabajo, exponiendo el uso de diversas herramientas que permitirán darle un enfoque ágil a la economía basada en servicios.

Por ello se requiere seguir como guía de trabajo los 26 procesos que lo componen el ciclo de vida de los servicios, agrupados en 5 grupos, adicionalmente define 4 funciones:  en forma que no se contraponen a los principios del manifiesto ágil. Sin embargo, en sus orígenes el primer mandamiento de dicho manifiesto postula: “compromiso primero la gente sobre los procesos.

Con 25 años como administrador de sistemas y hoy defino como gerencia de Servicios Informáticos pretendo en este blog exponer algunas ideas y la forma de como reconciliar estas dos posturas, aparentemente antagónicas pero que el trasfondo persiguen un mismo objetivo. La entrega de un servicio con calidad de clase mundial.

Ambos enfoques pretenden resolver el mismo problema pero desde una enfoque totalmente distinto. Las necesidades del cliente continúan sin cumplirse

ITIL define un servicio como: “Ayudar al cliente a obtener los resultados que desea obtener, sin incurrir en los costos y riesgos necesarios para su obtención.

Detengamonos aquí y analicemos, desde el punto de vista de TI, cuales son esos costos. Primero tenemos los costos de infraestructura, en los tiempos en que se originó el marco de trabajo de ITIL incluye: edificios, instalaciones eléctricas, aire acondicionado, la red de datos, servidores, software y un largo etcétera. ¿Qué tenemos ahora? En primera instancia los servicios en nube: IaaS, Paas, SaaS dándonos la posibilidad de implementar cualquiera de ellos, en solo un par de horas, reduciendo drásticamente el tiempo de aprovisionamiento de meses a solo dos horas.

Pongamos un ejemplo concreto. Mi actual empleador decidió abrir oficinas en una plaza nueva siguiendo el modelo tradicional de brick and mortar. Primero ¿cual era el resultado que deseaba obtener? Tener presencia física de su marca en una nueva plaza. Concentrándonos en la forma tradicional de hacer las cosas en TI desde el punto de vista de ITIL, pero antes voy a presentar dos herramientas tradicionales para la gestión de proyectos, Sdesk y Jira, una perteneciente al ámbito tradicional y otra al mundo del manifiesto ágil.
El primer proceso de ITIL, la administración estratégica de los servicios de TI, indica que hay dos formas estratégicas a seguir, aprovisionar las nuevas instalaciones como siempre se ha ejecutado o elegir entre los nuevos modelos de aprovisionamiento.

