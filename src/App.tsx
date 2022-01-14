import React from 'react';
import './Assets/Styles/App.css';
import WebSocketBinance from './components/WebSocketBinance/WebSocketBinance';
import { Header } from './Layouts/Header/Header';

import { useSelector,shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Pair, PairState } from './utils/type-d';
import { addPair } from './store/actionCreators';
import { TableBinanceContainer } from './containers/TableBinanceContainer';

function App() {

  return (
    <div className="App">
      <Header/>
      <TableBinanceContainer/>
      <WebSocketBinance/>
    </div>
  );
}

export default App;
