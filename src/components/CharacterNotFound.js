import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const CharacterNotFound = () => {
  return (
    <>
      <section>
        <h2 className="optionalMessage">Character not found, sorry</h2>
      </section>
      <Link to="/" className="link">
        <h4>Return to main site</h4>
      </Link>
    </>
  );
};

export default CharacterNotFound;
