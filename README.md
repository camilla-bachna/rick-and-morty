# Rick and Morty

![Ricky and Morty](/src/images/Rick_and_Morty.png)

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que
podemos filtrar por el nombre del personaje y por especie.

## Cómo lo he creado:

He usado **React** para realizarlo así como HTML CSS, JavaScript y API.

## Descárgate el repositorio:

- Descarga el [respositorio](https://github.com/camilla-bachna/rick-and-morty.git) de GitHub.
- Abre una terminal y instala las dependencias locales ejecutando en la terminal el comando:

```bash
npm install
```

- Por último arranca el proyecto ejecutando el comando:

```bash
npm start
```

Se abrirá una ventana del explorador y ya podrás usar la aplicación.

## Descripción Técnica:

Las distintas partes del ejercicio son:

### Listado de personajes:

- He utilizado el servicio de [API Rick and Morty](https://rickandmortyapi.com/api/character) que me devuelve la
  información sobre los primeros 20 personajes de la serie.
- Sobre cada uno he pintado la foto, el nombre y la especie.

![Card](/src/images/Card.png)

- He usado CSS Grid para pintar el listado de personajes.

### Filtros:

![Filters](/src/images/Filters.png)

#### Filtrado de personajes:

- Para que el usuario puede buscar los personajes por nombre, he añadido un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

#### Filtrado de especies:

- Para que el usuario puede buscar los personajes por especie.

#### Filtrado de estado:

- El usuario puede seleccionar el estado.

#### Filtrado de origen:

- El usuario puede seleccionar el origen mediante unas checkboxes.

### Reset

- Para eliminar los filtros, el usuario puede pulsar el botón de reinicio.

### Componentes del listado de personajes:

Hay los siguientes componentes:

- Componente para los filtros
- Componente para el listado
- Componente para la tarjeta de cada personaje del listado
- Componente para el detalle de cada personaje
- Componente si no se encuentra ningún carácter
- Componente para el botón de reset

### Detalle de personajes:

- Al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa (He usado rutas y React router).
- En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que
  aparece y si está vivo o muerto.
- Si un personajes está muerto con un icono aparece junto a la especie.

![Character Detail](/src/images/Character_Detail.png)

### Detallitos de calidad:

- El campo de texto esta recubierto por una etiqueta `<form/>`. Para impedir que el navegador navegue o cambie
  la ruta sin querer he usado preventDefault.
- Si el usuario busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se mostra un mensaje "No hay ningún personaje que coincida con la palabra XXX" (en inglés).
- Los filtros filtran independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto mostra el texto que tenía anteriormente.
- Diseño responsivo: La página funciona bien en varios dispositivos (mobile, tablet y desktop).
- La URL del detalle de personaje esta compartible, es decir, que si el usuario visita esa URL directamente en el navegador se vea el detalle del personaje.
- Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) aparece un mensaje "El personaje que buscas no existe" (en inglés).
- El listado de personajes esta ordenado alfabéticamente por nombre.

> **NOTA:** Si tienes alguna sugerencia o mejora: son siempre bienvenidas!

## Contacto 🖋

Si te gusta este trabajo, no dudes en **ponerte en contacto con migo**. Pincha en los enlaches para acceder a:

- [mi cuenta de LinkedIn](https://www.linkedin.com/in/camilla-bachna)
- [mi perfil de GitHub](https://github.com/camilla-bachna)

## Visita la página 💻:

Y por último, para ver la página, pincha en el siguiente enlace: [Rick and Morty](https://camilla-bachna.github.io/rick-and-morty/#/ 'Rick and Morty').
