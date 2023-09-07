import { ACT_FETCH_ALL_COUNTRY } from "./action";

const initState = {
  country: [],
};

function countryReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
}

export default countryReducer;
