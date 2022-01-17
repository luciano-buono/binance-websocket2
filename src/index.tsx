import React from "react";
import ReactDOM from "react-dom";
import "./Assets/Styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer"
import { DispatchType, PairAction, PairState } from "./utils/type-d";
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter as Router} from "react-router-dom";

const store: Store<PairState, PairAction> & {dispatch: DispatchType} = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
