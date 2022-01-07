import React from 'react';
import './Assets/Styles/App.css';
import WebSocketBinance from './components/WebSocketBinance/WebSocketBinance';
import { Header } from './Layouts/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <WebSocketBinance/>
    </div>
  );
}

export default App;
