import React from 'react';
import './Assets/Styles/App.css';
import WebSocketBinance from './components/WebSocketBinance/WebSocketBinance';
import { Header } from './Layouts/Header/Header';
import { TableBinanceContainer } from './containers/TableBinanceContainer';
import {
  Route,
  Routes,
} from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<><WebSocketBinance/><TableBinanceContainer/></>}/>
      </Routes>
{/* 
      <WebSocketBinance/>
      <TableBinanceContainer/> */}
    </div>
  );
}

export default App;
