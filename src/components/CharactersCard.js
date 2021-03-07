import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharactersCard = (props) => {
  return (
    /* link to character detail page */

    <Link to={`/character/${props.character.id}`}>
      {/* paint list with all characters */}

      <div className="list__item--container">
        <img
          src={props.character.foto}
          alt={`Foto of ${props.character.name}`}
          className="list__item--image"
        />

        <h2 className="list__item--name">{props.character.name}</h2>
        <h3 className="list__item--species">{props.character.species}</h3>
      </div>
    </Link>
  );
};

/* propTypes */

CharactersCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    episode: PropTypes.array.isRequired,
  }),
};

export default CharactersCard;
