function buscarPersonajeAleatorio() {
    const characterId = Math.floor(Math.random() * 100) + 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Haz algo con los datos
        // Obtener el nombre y la imagen del personaje
      const characterName = data.name;
      const characterImage = data.image;
      const characterGenre = data.gender;
      console.log(data)
      // Actualizar el HTML con el nombre y la imagen del personaje
      document.getElementById("character-name").textContent = characterName;
      document.getElementById("character-image").src = characterImage;
      document.getElementById("character-genre").textContent = characterGenre;
      })
      .catch(error => {
        // Maneja cualquier error
        console.error(error);
      });
  }