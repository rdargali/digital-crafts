import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FancyCounter from './components/FancyCounter';


function App() {
  return (
    <div className="App">
        <Counter />
        <FancyCounter />
    </div>
  );
}

export default App;
