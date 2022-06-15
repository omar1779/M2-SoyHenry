import React from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <div className='SearchBar'>
        <SearchBar onSearch={(ciudad) => alert(ciudad)}/>
      </div>
      <div>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
