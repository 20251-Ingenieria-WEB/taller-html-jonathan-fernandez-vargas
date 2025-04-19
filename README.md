# 🔍 PokéFinder

PokéFinder es una aplicación web simple e interactiva que te permite buscar información detallada de cualquier Pokémon utilizando la [PokéAPI](https://pokeapi.co/). Solo ingresa el nombre del Pokémon y la app te mostrará su imagen, tipos, habilidades y estadísticas base.

![PokéFinder Screenshot](LogoPokéFinder.png)

---

## 🚀 Tecnologías utilizadas

- HTML5 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
- CSS3 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
- JavaScript <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
- [PokéAPI](https://pokeapi.co/)
- Google Fonts (`Silkscreen`, `Bungee Spice`, `Roboto`)
- Font Awesome (para íconos)

---

## 🎯 Funcionalidades principales

- **Búsqueda de Pokémon por nombre**
- **Visualización de:**
  - Imagen oficial
  - Tipos
  - Habilidades
  - Estadísticas base
- **Validación de entrada**
- **Mensajes de error amigables**
- **Diseño responsive y atractivo**

---

## Getting Started 🚀

_These instructions will get you a working copy of the project on your local machine for development and testing purposes._

See **Deployment** to learn how to deploy the project.

### Prerequisites 📋

_What you need to install the software and how to install them_

```
- Make sure you have Git installed on your system. You can download it from git-scm.com and follow the installation instructions.
- GitHub.
- An IDE such as VisualStudio Code.
- A browser such as Chrome.
```

---

### Installation 🔧

_A series of step-by-step examples that tells you what you need to run to get a development environment up and running_

_Clone repository_

```
git clone https://github.com/20251-Ingenieria-WEB/taller-html-jonathan-fernandez-vargas.git
```

_Verify cloning_

```
cd taller-html-jonathan-fernandez-vargas
```

---

## 🧠 Estructura del código

### `index.html`

- Contiene la estructura principal del sitio.
- **Encabezado** con logo, título y subtítulo.
- **Sección de búsqueda** con un campo de entrada y botón.
- **Sección de resultados** para mostrar los datos del Pokémon.
- **Sección de error** para mensajes si el nombre está mal escrito o el Pokémon no existe.
- **Footer** con créditos y enlaces a GitHub y portafolio.

### `style.css`

- Estilo retro inspirado en los videojuegos clásicos de Pokémon.
- **Diseño responsive** para dispositivos móviles.
- Hover effects en imágenes y botones.
- Colores y fuentes personalizados para mejor experiencia visual.
- Media queries para ajustar la presentación en pantallas pequeñas.

### `script.js`

```js
// Función principal de búsqueda
function buscarPokemon() {
  const nombre = document.getElementById('searchInput').value.toLowerCase().trim();

  // Validación de entrada
  if (nombre === '') {
    Mostrar error si el campo está vacío
  }

  // Llamada a la PokéAPI
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(response => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then(data => {
      // Extrae nombre, imagen, tipos, habilidades y estadísticas
      // Renderiza HTML dinámico con esta información
    })
    .catch(() => {
      // Muestra mensaje si no se encuentra el Pokémon
    });
}

// Ejecuta búsqueda al presionar Enter
// Recarga la página si se hace clic en el logo
```

---

## Author ✒️

* **Jonathan Fernandez** - [Jonathand77](https://github.com/Jonathand77)

## License 📄

This project is licensed under the (MIT LICENSE) License - see the [LICENSE](LICENSE) file for details

## Expressions of Gratitude 🎁

* Tell others about this project 📢
* Say thank you publicly 🤓.

--- 
⌨️ by [Jonathand77](https://github.com/Jonathand77) 😊
