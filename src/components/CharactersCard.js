import React from 'react';
import { Link } from 'react-router-dom';

const CharactersCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <img
        src={props.character.foto}
        alt={`Foto of ${props.character.name}`}
        className="list__item--image"
      />
      <div className="list__item--container">
        <h2 className="list__item--name">{props.character.name}</h2>
        <h3 className="list__item--species">{props.character.species}</h3>
      </div>
    </Link>
  );
};

export default CharactersCard;
