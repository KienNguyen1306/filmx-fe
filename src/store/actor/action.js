import ArtorService from "../../services/actorServices";

export const ACT_FETCH_ALL_ACTOR = "ACT_FETCH_ALL_ACTOR";

export function actFetchAllActor(actor) {
  return {
    type: ACT_FETCH_ALL_ACTOR,
    payload: actor,
  };
}

export function actFetchAllActorAsync() {
  return async (dispatch) => {
    const response = await ArtorService.getAllArtor();
    dispatch(actFetchAllActor(response));
  };
}
