import GenreService from "../../services/genreServices";

export const ACT_FETCH_ALL_GENRE = "ACT_FETCH_ALL_GENRE";

export function actFetchAllGenre(genres) {
  return {
    type: ACT_FETCH_ALL_GENRE,
    payload: genres,
  };
}

export function actFetchAllGenreAsync() {
  return async (dispatch) => {
    const response = await GenreService.getAllGenre();
    dispatch(actFetchAllGenre(response));
  };
}
