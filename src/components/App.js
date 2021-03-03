import React, { useEffect, useState } from 'react';
import dataApi from '../services/dataApi';
import CharactersList from './CharactersList';

console.log(dataApi());
const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    //console.log(dataApi());
    dataApi().then((data) => setCharacters(data));
  }, []);
  return (
    <>
      <CharactersList />
      <h1>Hola Mundo</h1>
    </>
  );
};
export default App;
