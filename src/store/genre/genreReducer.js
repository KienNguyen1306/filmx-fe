import { ACT_FETCH_ALL_GENRE } from "./action";

const initState = {
  genre: [],
};

function genreReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_GENRE:
      return { ...state, genre: action.payload };
    default:
      return state;
  }
}

export default genreReducer;
