document.getElementById('searchButton').addEventListener('click', buscarPokemon);

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
        <img src="${imagen}" alt="Imagen de ${nombre}" />
        <h2>${nombre}</h2>
        <p><strong>Tipo:</strong> ${tipos}</p>
        <p><strong>Habilidades:</strong> ${habilidades}</p>
        <h3>Estadísticas</h3>
        <ul style="list-style: none; padding-left: 0;">
          ${stats}
        </ul>
      `;
    })
    .catch(error => {
      errorMessage.textContent = 'No se encontró el Pokémon. Intenta con otro nombre. O revisa que este escrito correctamente';
      errorMessage.classList.remove('hidden');
    });
}
