import * as action from "./actions";

const initialState = {
  inputValue: "",
  movies: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        inputValue: action.value
      };
    case "FETCH_MOVIES":
      return {
        ...state,
        movies: action.data
      };

    case "CLEAR_INPUT":
      return {
        ...state,
        inputValue: ""
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.number
      };
    case "FETCH_NEXT_PAGE":
      return {
        ...state,
        movies: state.movies.concat(action.data)
      };
    default:
      return state;
  }
};

export default reducer;
