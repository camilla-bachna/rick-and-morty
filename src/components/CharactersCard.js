import React from 'react';

const CharactersCard = (props) => {
  return (
    <>
      <img
        src={props.character.foto}
        alt={`Foto of ${props.character.name}`}
        className="list__item--image"
      />
      <div className="list__item--container">
        <h2 className="list__item--name">{props.character.name}</h2>
        <h3 className="list__item--species">{props.character.species}</h3>
      </div>
    </>
  );
};

export default CharactersCard;
