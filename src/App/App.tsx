import React, { useEffect, useState } from 'react';
import './App.css';
import cardApi from '../services/Api';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cardResults, setCardResults] = useState({});

  const getCardByName = (cardName: string) => {
    cardApi.get(`/cards?name=${cardName}`).then((response) => {
      setCardResults(response);
      console.log(response);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter Name of Card"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={() => getCardByName(searchValue)}>Search</button>
        </form>
        <div className="results-container">
          <h1>Cards:</h1>
        </div>
      </header>
    </div>
  );
};

export default App;
