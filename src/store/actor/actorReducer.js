import { ACT_FETCH_ALL_ACTOR } from "./action";

const initState = {
  actor: [],
};

function actorReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_ACTOR:
      return { ...state, actor: action.payload };
    default:
      return state;
  }
}

export default actorReducer;
