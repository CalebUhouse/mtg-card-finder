import React, { useState } from "react";
import "./App.css";
import cardApi from "../services/Api";
import CardBlock from "../common/components/CardBlock";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cardResults, setCardResults] = useState({ data: { cards: [] } });
  const [numberDisplayed, setNumberDisplayed] = useState(5);

  const getCardByName = (cardName: string) => {
    cardApi.get(`/cards?name=${cardName}`).then((response) => {
      setCardResults(response);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="card-finder-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="search-value"
              type="text"
              placeholder="Enter Name of Card"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="search-value"
              onClick={() => getCardByName(searchValue)}
            >
              Search
            </button>
          </form>
          <div className="results-container">
            <h1>Cards:</h1>
            <p>Number of Cards Shown:</p>
            <input
              className="number-displayed"
              type="number"
              value={numberDisplayed}
              onChange={(e) => setNumberDisplayed(parseInt(e.target.value))}
            />
            <div className="card-block-container">
              {cardResults.data?.cards
                .slice(0, numberDisplayed)
                .map((card, index) => (
                  <CardBlock key={index} cardData={card} />
                ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
