import React, { useEffect, useState } from 'react';
import dataApi from '../services/dataApi';
import CharactersList from './CharactersList';
import logo from '../images/Rick_and_Morty_-_logo.png';

console.log(dataApi());
const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    dataApi().then((data) => setCharacters(data));
  }, []);
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo Rick and Morty" className="header__image" />
      </header>
      <main>
        <CharactersList characters={characters} />
      </main>
      <footer>
        <small className="footer">Rick and Morty</small>
      </footer>
    </>
  );
};
export default App;
