import React from "react";
import "./App.css";
import MoviesApp from "./Components/MoviesApp";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { Switch, Route, withRouter } from "react-router-dom";

const App = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route path={"/"} exact component={MoviesApp} />
          <Route
            path={"/MoviesApp/:movie"}
            render={props => <MovieDetails {...props} />}
          />
        </Switch>
      </Provider>
    </>
  );
};

export default withRouter(App);
