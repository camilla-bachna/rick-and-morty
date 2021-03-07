import React from 'react';
import CharactersCard from './CharactersCard';
import '../stylesheets/App.scss';

const CharactersList = (props) => {
  /*  sort alphabetically */
  const characterName = props.characters.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const character = characterName.map((character) => {
    return (
      <li key={character.id} className="list__item">
        <CharactersCard character={character} />
      </li>
    );
  });

  return (
    <>
      <ul className="list">{character} </ul>
    </>
  );
};
export default CharactersList;
