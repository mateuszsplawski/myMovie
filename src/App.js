import React from "react";
import "./App.css";
import MoviesApp from "./Components/MoviesApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

const App = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <>
      <Provider store={store}>
        <MoviesApp />
      </Provider>
    </>
  );
};

export default App;
