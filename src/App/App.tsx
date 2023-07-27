import React, { useState } from 'react';
import './App.css';
import cardApi from '../services/Api';
import CardBlock from '../common/components/CardBlock/CardBlock';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cardResults, setCardResults] = useState({ data: { cards: [] } });
  const [numberDisplayed, setNumberDisplayed] = useState(5);

  const getCardByName = (cardName: string) => {
    cardApi.get(`/cards?name=${cardName}`).then((response) => {
      setCardResults(response);
      console.log(response);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => e.preventDefault()}>
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
          <p>Number of Cards Shown:</p>
          <input className="number-displayed" type="number" value={numberDisplayed} />
          <div className="card-block-container">
            {cardResults.data?.cards.slice(0, numberDisplayed).map((card) => (
              <CardBlock cardData={card} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
