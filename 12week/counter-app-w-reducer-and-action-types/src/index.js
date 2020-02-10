import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

//components
import App from "./App";
import ToDo from "./components/ToDo";
import Counter from "./components/Counter";

import { BrowserRouter, Route } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import counterReducer from "./store/reducers/counter";
import toDoReducer from "./store/reducers/todo";
import BaseLayout from "./components/BaseLayout";

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  toDoReducer: toDoReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Route exact path="/" component={App} />
        <Route path="/counter" component={Counter} />
        <Route path="/todo" component={ToDo} />
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
