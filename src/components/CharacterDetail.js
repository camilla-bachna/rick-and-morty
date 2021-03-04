import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/" className="link">
        Return to main site
      </Link>
      {props.children}
    </>
  );
};
export default CharacterDetail;
