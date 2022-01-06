import React from 'react';
import logo from './logo.svg';
import './Assets/Styles/App.css';
import WebSocketBinance from './components/WebSocketBinance';

function App() {
  return (
    <div className="App">
      <WebSocketBinance/>
    </div>
  );
}

export default App;
