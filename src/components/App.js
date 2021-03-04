import React, { useEffect, useState } from 'react';
import dataApi from '../services/dataApi';
import CharactersList from './CharactersList';
import logo from '../images/Rick_and_Morty_-_logo.png';
import Filter from './Filter';

const App = () => {
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

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo Rick and Morty" className="header__image" />
      </header>
      <main>
        <Filter handleFilter={handleFilter} name={name} />
        <CharactersList characters={filterCharacters} />
      </main>
      <footer>
        <small className="footer">Rick and Morty</small>
      </footer>
    </>
  );
};
export default App;
