import React from 'react';
import './Assets/Styles/App.scss';
import WebSocketBinance from './components/WebSocketBinance/WebSocketBinance';
import { Header } from './Layouts/Header/Header';
import { TableBinanceContainer } from './containers/TableBinanceContainer';
import {
  Route,
  Routes,
} from "react-router-dom";
import { About } from './components/About/About';
function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<><WebSocketBinance/><TableBinanceContainer/></>}/>
        <Route path={'/about'} element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
