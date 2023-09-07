import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import movieData from "./movie/movieReducer";
import genreData from "./genre/genreReducer";
import countryData from "./country/countryReducer";
import actorData from "./actor/actorReducer";

const rootReducer = combineReducers({
  MOVIE: movieData,
  GENRE: genreData,
  COUNTRY: countryData,
  ACTOR: actorData,
});

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
