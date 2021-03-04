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

  return (
    <>
      <ul className="list">{character} </ul>
    </>
  );
};
export default CharactersList;
