# Proyecto MovieChallenge : MovieList
## Indice
1. Preámbulo
2. Resumen del proyecto
3. Aspectos Tecnicos 
4. Historias de Usuario
5. Prototipado
6. Despliegue

## 1. Preámbulo
La manera en que vemos películas ha cambiado radicalmente durante los últimos años debido, en parte, a la aparición de los servicios de streaming que nos permiten hacerlo desde donde estemos y en cualquier momento. El mejor reflejo de este fenómeno es el éxito de Netflix, HBO y Disney+, etc.
En tiempos en los que una de las principales herramientas para combatir la pandemia de Covid-19 es evitar compartir espacios con muchas personas (como en el cine), ver películas por streaming será una de las pocas maneras de hacerlo (¿o la única?).
Creemos que hay una gran oportunidad de proponer productos/experiencias innovadoras de todo tipo utilizando datos de películas (directorxs, actorxs, sagas, secuelas, fechas, etc.). Podríamos pensar en juegos, comunidades, catálogos, recomendaciones basadas en gustos personales, etc. (sólo por mencionar algunas ideas obvias).

## 2. Resumen del proyecto
La premisa de este proyecto es utilizar una API de películas para concebir, planificar, organizar y desarrollar una aplicación web que aproveche estos datos y ofrezca una propuesta de valor atractiva para los usuarios.
Con este propósito en mente, se diseñó la aplicación web con dos sistemas de filtrado de películas (género y tipo de ordenamiento) y un sistema de paginación, con el objetivo de mejorar la experiencia de navegación de los usuarios. La versión de escritorio es la vista nativa de la aplicación, donde se pueden apreciar 20 peliculas por pagina. Una vez seleccionada una película, los usuarios podrán acceder a una segunda vista donde encontrarán información detallada sobre la misma.

## 3. Aspectos Tecnicos 
Esta aplicación ha sido diseñada como una Single Page Application (SPA) con el propósito de cargar un único enlace que presenta diversas vistas, optimizando así las llamadas a través de la API de <a href="https://developer.themoviedb.org/reference/intro/getting-started" title="Link API">The Movie Database</a>. Además, ha sido desarrollada utilizando el framework <a href="https://angular.io/" title="Link angular">Angular</a> en su versión 14 y haciendo uso de SCSS como preprocesador.

## 4. Historias de Usuario

[Historia de usuario 1] Listado de películas<br>
Descripción: Yo como usuaria quiero visualizar en un tabla (filas y columnas) el catálogo de películas.<br>
Criterios de aceptación:
-Se debe usar el endpoint /discover/movie.
-La aplicación cuenta con una paginación para explorar el catálogo por páginas.
-Para cada película se debe mostrar como mínimo: poster, título original y año de lanzamiento.<br>
Definición de terminado: Los componentes desarrollados deben contar con test unitarios.

[Historia de usuario 2] Filtro y ordenamiento<br>
Descripción: Yo como usuaria quiero filtrar y ordenar el catálogo de películas usando los criterios soportados por TheMovie Database API V3.<br>
Criterios de aceptación:
-Para filtrar se debe usar el endpoint /discover/movie, y alguno de sus parámetros como por ejemplo with_genres.
-Para ordenar se debe usar el endpoint /discover/movie, y alguno de sus parámetros como por ejemplo sort_by.
-La paginación debe conservar el filtro y ordenamiento
-Para cada película se debe mostrar como mínimo: poster, título original y año de lanzamiento.<br>
Definición de terminado: Los componentes desarrollados deben contar con test unitarios.

[Historia de usuario 3] Detalle de una película<br>
Descripción: Yo como usuaria quiero consultar los detalles de una película.<br>
Criterios de aceptación:
-Se debe usar el endpoint /movie/{movie_id}.
-Para la película se debe mostrar como mínimo: poster, título original, año de lanzamiento, géneros, promedio de votación y total de votos.
-La interfaz debe permitir retornar al listado de películas conservando el filtro y ordenamiento.<br>
Definición de terminado: Los componentes desarrollados deben contar con test unitarios.

## 5. Prototipado
El Product Owner nos entrega una primera iteración del prototipo de baja fidelidad de la aplicación.<br>
<img src="/src/assets/Prototipo de baja fidelidad - vista home.png" width="600" alt="Prototipo baja vista home"><br>
Vista Home
<br>
<img src="/src/assets/Prototipo de baja fidelidad - vista detalle.png" width="600" alt="Prototipo baja vista detalle"><br>
Vista Detalle
<br>

Luego de tener nuestro prototipo de baja fidelidad (wireframe), se realizo un prototipo de alta fidelidad (mockup) en figma.<br>
<img src="/src/assets/estilo grafico.png" width="600" alt="Estilo grafico"><br>
Estilo Grafico
<br>
<img src="/src/assets/prototitpo alta fidelidad vista home.png" width="600" alt="Prototipo alta vista home"><br>
Vista Home
<br>
<img src="/src/assets/prototipo alta fidelidad vista detalle.png" width="600" alt="Prototipo alta vista detalle"><br>
Vista Detalle
<br>

## 6. Despliegue

Por último, el proyecto fue desplegado en <a href="https://vercel.com/home" title="Link vercel">Vercel</a>, una plataforma de despliegue que ofrece la capacidad de implementar nuestra aplicación web de manera eficiente y confiable<br>
<img src="/src/assets/sitioweb.jpg" width="600" alt="Sitio web">
___

Belén Osorio