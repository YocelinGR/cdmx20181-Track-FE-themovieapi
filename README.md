# Documentación y desarrollo
## Movies
1.	Definición de objetivos y estrategia: En esta sección se definirán los resultados que busca el  cliente, se propondrán las diferentes opciones que podrían ayudar a conseguir los objetivos y se buscará llegar a un acuerdo con el cliente, para ello es importante definir estrategias que definirán si se desarrollará un  blog, sitio brochure, si interactuará con el usuario, etc.
El objetivo principal de este proyecto es desarrollar una herramienta que permita observar una lista de películas y sus detalles
Objetivos del cliente:
Objetivos técnicos:
-	Uso de conceptos como: arrays, objects, DOM, XHT y Visual Design.
-	Manejo de API´s.
-	Manejo de información a niveles profundos.
-	Funciones como objetos globales (module.export).
-	Métodos de arrays y objects (filter, map, sort, etc.).
-	Manejo de Test como métrica de calidad en el código (uso de mocha tests y git).
-	GitHub colaborativo (manejo de ramas, commits, conflictos, repositorios remotos y locales, sincronización de repositorios).
-	Frameworks de CSS (Materialize, Bootstrap, etc.) o CSS nativo con responsive.
-	Manejo de múltiples documentos HTML o parámetros de display (none, visibility).
-	Proceso de UX (research, diseño, implementación, testeo).
2.	Desarrollo de contenidos: El apartado debe definir el contenido del sitio, listar las páginas que es relevante tener, detallando información sobre su contenido, además es necesario redactar los textos para mostrarse.
2.1.	Inicio de Sesión: La página solicita que exista una autentificación de usuario. Exigirá un usuario, contraseña y contiene un botón de “Acceder”.
2.2.	1er Vista:
3.	Propuesta de diseño:
4.	Desarrollo y maquetación :
El desarrollo y maquetación del proyecto se en Materialize versión 1.0.0-rc.2 por medio de su CDN, además se hace uso de estilos sencillos en CSS.
5.	Dar revisión y capacitación: Se da una asesoría al cliente sobre el uso y administración del sitio.
Se otorga al usuario una liga a un video de YouTobe con explicación de uso de la página y donde se explican los detalles más importantes de la implementación. Se otorga un periodo de un mes al cliente para encontrar posibles fallas o dudas sobre el sistema, después de este periodo se podría requerir alguna gratificación por asesorías.
6.	Publicación en el servidor o URL definitiva: Se entrega una liga en GitHub Pages y  la liga del repositorio:
Repositorio: https://github.com/YocelinGR/cdmx20181-Track-FE-themovieapi/tree/v1.1.1
GitHub Pages: https://yocelingr.github.io/cdmx20181-Track-FE-themovieapi/src/index.html
Documentación:
6.1.	Tecnologías: descripción de tecnologías, Frameworks, compiladores, gestores de tareas, librerías, su versión y cómo se usa.
-	Materialize V1.0.0-rc.2: Uso para estructura en HTML y estilos para vista de autentificación, botones, para generar el Templete String de los cards y sus estilos, para el HTML de la lista de alumnas y su estilo, además para generar los modales y su estilo.
-	Fetch: Es un objeto de JavaScript que proporciona un método para obtener la información de una URL, en el caso expuesto se usa para tener acceso a un objeto dentro de un archivo JSON que ha sido montado en un servidor web como API.
-	API: Application Programming Interface, es un conjunto de reglas –código- y especificaciones que las aplicaciones pueden seguir para comunicarse entre ellas, en este caso, se usa para enlazar la llamada de Fetch con el objeto JSON.
6.2.	Organización: Boilerplate. Estructura de los ficheros.
1.	./
2.	├── .git
3.	├── docs
4.	├── node_modules
5.	├── src
6.	|   |__ asserts
7.	|       |__ colection of project´s pictures
8.	|   |__ css
9.	|       |__ index.css
10.	|       |__ style.css
11.	|   |__ js
12.	|       |__ authentications.js
13.	|       |__ data.js
14.	|       |__ login.js
15.	|       |__ main.js
16.	|   |__ views
17.	|       |__ login.html
18.	|       |__ showMovies.html
19.	|   |__ index.html
20. |__ babel.rc
21.	├── .eslintrc
22.	├── .eslintrc.js
23.	├── .gitignore
24.	├── package-lock.json
25.	├── package.json
26.	├── README.md
27.	|__ yarm.lock

7.3.	 Layout: disposición general de los bloques del sitio, sus módulos y los handles o hooks para llamarlos (rutas).
7.4.	Módulos: Nombre de cada módulo, sus parámetros, peculiaridades, de dónde obtiene los datos y como se transforman.
8.	Organización y distribución de tareas:
Acuerdos de trabajo:
-	 Miembro Yocelin Garcia se enfoca en la funcionalidad, test y realizar funciones para pasar data al DOM.
9.	Fechas importantes:
Demo Sprint : Viernes 24 de Agosto de 2018.
10.	Equipo y contacto:
10.1.	Yocelin García: Habilidad de UX Designer, además tiene excelentes capacidades para programar en CSS, HTML y JavaScript. Hace uso de GitHub colaborativo y presenta buena lógica de extracción de datos de API´s.
Contacto:
-	Slack: YOCELIN GARCIA ROMERO
-	GitHub: https://github.com/YocelinGR
-	FaceBook: @Yocelin Garcia Romero
-	Correo: garcia_romero.y@hotmail.com
