const dataApi = () => {
  return (
    fetch('https://rickandmortyapi.com/api/character')
      /*  attention to URL */
      .then((response) => response.json())
      .then((data) => {
        return data.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            species: character.species,
            foto: character.image,
            status: character.status,
            origin: character.origin.name,
            episode: character.episode,
          };
        });
      })
  );
};
export default dataApi;
