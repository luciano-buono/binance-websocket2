import React from 'react';
import './Assets/Styles/App.css';
import WebSocketBinance from './components/WebSocketBinance/WebSocketBinance';
import { Header } from './Layouts/Header/Header';

import { useSelector,shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Pair, PairState } from './utils/type-d';
import { addPair } from './store/actionCreators';

function App() {
  const pairs:readonly Pair[] = 
  useSelector((state:PairState) => state.pairs, shallowEqual)

  const dispatch: Dispatch<any> = useDispatch();
  const savePair = (pair: Pair) => dispatch(addPair(pair))
  
  return (
    <div className="App">
      <Header/>
      <WebSocketBinance/>
    </div>
  );
}

export default App;
