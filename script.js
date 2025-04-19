//Escucha clics en el botón para ejecutar la función principal.
document.getElementById('searchButton').addEventListener('click', buscarPokemon);

//Esta función:
//Toma el valor ingresado.
//Llama a la PokéAPI con fetch.
//Si encuentra al Pokémon, muestra nombre, imagen, tipo, habilidades y estadísticas. Si no lo encuentra, muestra un mensaje de error.
function buscarPokemon() {
  const nombre = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultSection = document.getElementById('result');
  const errorMessage = document.getElementById('errorMessage');

  // Limpiar resultados y errores previos
  resultSection.innerHTML = '';
  errorMessage.classList.add('hidden');
  errorMessage.textContent = '';

  if (nombre === '') {
    errorMessage.textContent = 'Por favor ingresa un nombre de Pokémon.';
    errorMessage.classList.remove('hidden');
    return;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      return response.json();
    })
    .then(data => {
        const nombre = data.name.toUpperCase();
        const imagen = data.sprites.front_default;
        const tipos = data.types.map(t => t.type.name).join(', ');
        const habilidades = data.abilities.map(a => a.ability.name).join(', ');
        // Obtener estadísticas
        const stats = data.stats.map(stat => {
          return `<li><strong>${stat.stat.name}:</strong> ${stat.base_stat}</li>`;
        }).join('');
      
        resultSection.innerHTML = `
          <div class="pokemon-info">
            <img src="${imagen}" alt="Imagen de ${nombre}" class="pokemon-image" />
            <div class="pokemon-details">
              <h2>${nombre}</h2>
              <p><strong>Tipo:</strong> ${tipos}</p>
              <p><strong>Habilidades:</strong> ${habilidades}</p>
              <h3>Estadísticas</h3>
              <ul style="list-style: none; padding-left: 0;">
                ${stats}
              </ul>
            </div>
          </div>
        `;      
    })
    .catch(error => {
      errorMessage.textContent = 'No se encontró el Pokémon. Intenta con otro nombre. O revisa que este escrito correctamente';
      errorMessage.classList.remove('hidden');
    });
}

// Al presionar Enter dentro del input, ejecuta la búsqueda
document.getElementById('searchInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      buscarPokemon();
    }
  });
  
  // Al hacer clic en el logo, recarga la página
  document.getElementById('logo').addEventListener('click', function (e) {
    e.preventDefault(); // evita el salto al tope
    window.location.reload();
  });