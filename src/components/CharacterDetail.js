import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/" className="link">
        <h4>Return to main site</h4>
      </Link>
      {props.children}
    </>
  );
};
export default CharacterDetail;
