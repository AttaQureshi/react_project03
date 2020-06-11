import React from 'react';
import Dinner from './Dinner.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dinner fruitName="Apple" vegName="Onion"/>
        <Dinner fruitName="Banana" vegName="Spinach"/>
        <Dinner fruitName="Strawberry" vegName="Potato"/>
        <Dinner fruitName="Strawberry" vegName="Potato"/>
      </header>
    </div>
  );
}

export default App;
