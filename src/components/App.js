import { Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import dataApi from '../services/DataApi';
import Filter from './Filter';
import CharactersList from './CharactersList';
import CharacterDetail from './CharacterDetail';
import CharacterNotFound from './CharacterNotFound';
import logo from '../images/Rick_and_Morty_-_logo.png';

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');

  /* get data from Api */

  useEffect(() => {
    dataApi().then((data) => setCharacters(data));
  }, []);

  /*  filter by name and by species*/

  const handleFilter = (inputKey, inputValue) => {
    if (inputKey === 'name') {
      setName(inputValue);
    } else if (inputKey === 'species') {
      setSpecies(inputValue);
    }
  };

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((character) => {
      return character.species.toLowerCase().includes(species.toLowerCase());
    });

  /* optional message if there is no character with this name or species */

  function optionalMessage() {
    if (filterCharacters.length === 0) {
      return (
        <p>
          There is no character matching the word {name} {species}.
        </p>
      );
    }
  }

  /* route */

  const renderDetail = (routerProps) => {
    const routerCharacterId = parseInt(routerProps.match.params.id);

    /* paint details of character or message if no character is found */

    const characterFound = characters.find(
      (character) => character.id === routerCharacterId
    );

    /* add icon if status of character is dead */

    function alien() {
      if (characterFound.status === 'Dead') {
        return <i className="fab fa-optin-monster characterDetail__alien"></i>;
      }
    }
    if (characterFound) {
      return (
        <div className="box">
          <CharacterDetail>
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
            {/* filter, optional message and characterlist within this route */}
            <Filter handleFilter={handleFilter} name={name} species={species} />
            <div className="optionalMessage">{optionalMessage()}</div>
            <CharactersList characters={filterCharacters} />
          </Route>
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
