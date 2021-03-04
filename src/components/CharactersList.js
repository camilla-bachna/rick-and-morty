import React from 'react';
import CharactersCard from './CharactersCard';
import '../stylesheets/App.scss';

const CharactersList = (props) => {
  const character = props.characters.map((character) => {
    return (
      <li key={character.id} className="list__item">
        <CharactersCard character={character} />
      </li>
    );
  });

  /* const character =
  props.characters.length > 0 ? (
    props.characters.map((character) => {
      return (
        <li key={character.id} className="list__item">
          <CharactersCard character={character} />
        </li>
      )}) : (
    <div>
      No results found 
    </div>
  )
 */
  /*   const character = props.characters.map((character) => {
    return (
      <li key={character.id} className="list__item">
        <CharactersCard character={character} />
      </li>
    );
  }); */
  return (
    <>
      {/*   {character.length > 0 ? { character } : <div>No results found.</div>} */}

      <ul className="list">{character} </ul>
    </>
  );
};
export default CharactersList;
