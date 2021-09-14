import { useEffect, useState } from "react";

import "./App.css";

import Characters from "./componentes/characters";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(
    () =>
      fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((response) => setCharacters(response.results))
        .catch((err) => console.log(err)),
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ricky and Morty</h2>
        <Characters charactersList={characters} />
      </header>
    </div>
  );
}

export default App;
