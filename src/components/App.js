import { Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import dataApi from '../services/dataApi';
import CharacterDetail from './CharacterDetail';
import CharactersList from './CharactersList';
import logo from '../images/Rick_and_Morty_-_logo.png';
import Filter from './Filter';
import CharacterNotFound from './CharacterNotFound';

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    dataApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputKey, inputValue) => {
    if (inputKey === 'name') {
      setName(inputValue);
    }
  };

  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });

  function optionalMessage() {
    if (filterCharacters.length === 0) {
      return <p>There is no character matching the word {name}</p>;
    }
  }

  /*   function alien() {
    if (filterCharacters. === 0) {
      return <i class="fab fa-optin-monster"></i>;
    }
  } */

  const renderDetail = (routerProps) => {
    const routerCharacterId = parseInt(routerProps.match.params.id);

    const characterFound = characters.find(
      (character) => character.id === routerCharacterId
    );
    function alien() {
      if (characterFound.status === 'Dead') {
        return <i className="fab fa-optin-monster characterDetail__alien"></i>;
      }
    }
    if (characterFound) {
      return (
        <div className="box">
          <CharacterDetail name={name}>
            <div className="characterDetail">
              <img
                src={characterFound.foto}
                alt={`Foto of ${characterFound.name}`}
                className="characterDetail__image"
              />
              <div className="characterDetail__container">
                <h2 className="characterDetail__name">{characterFound.name}</h2>
                <h3 className="characterDetail__species">
                  Status: {characterFound.status} {alien()}
                </h3>
                <h3 className="characterDetail__species">
                  Species: {characterFound.species}
                </h3>
                <h3 className="characterDetail__species">
                  Origin: {characterFound.origin}
                </h3>
                <h3 className="characterDetail__species">
                  Episodes: {characterFound.episode.length}
                </h3>
              </div>
            </div>
          </CharacterDetail>
        </div>
      );
    } else {
      return <CharacterNotFound />;
    }
  };
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo Rick and Morty" className="header__image" />
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} name={name} />
            <CharactersList characters={filterCharacters} />
            <div className="optionalMessage">{optionalMessage()}</div>
          </Route>
          {/*  has to be within this Route, otherwise  - if outside of Switch - would always paint it. Switch = if else. path="" always start with / */}
          <Route path="/character/:id" render={renderDetail}></Route>
        </Switch>
      </main>
      <footer className="footer">
        <small className="footer__text">Rick and Morty</small>
      </footer>
    </>
  );
}
export default App;
