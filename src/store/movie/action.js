import MovieService from "../../services/movieServices";

export const ACT_FETCH_ALL_MOVIE = "ACT_FETCH_ALL_MOVIE";
export const ACT_FETCH_MOVIE_DETAIL = "ACT_FETCH_MOVIE_DETAIL";
export const ACT_FETCH_MOVIE_RELATE = "ACT_FETCH_MOVIE_RELATE";
export const ACT_FETCH_MOVIE_SEARCH = "ACT_FETCH_MOVIE_SEARCH";
export const SET_PRODUCT_TYPE = "SET_PRODUCT_TYPE";
export const SET_RELOAD = "SET_RELOAD";
export const ACT_FETCH_TOP_VIEW = 'ACT_FETCH_TOP_VIEW'

export const setProductType = (type, id, title) => ({
  type: SET_PRODUCT_TYPE,
  payload: { type, id, title },
});
export const setReload = (reload) => ({
  type: SET_RELOAD,
  payload:reload
});

// get list movie
export function actFetchAllMovie(movies, currenPage, totalpages) {
  return {
    type: ACT_FETCH_ALL_MOVIE,
    payload: { movies, currenPage, totalpages },
  };
}

export function actFetchAllMovieAsync({ page = 1, type, id } = {}) {
  return async (dispatch) => {
    let url = "";
    if (type === "all") {
      url = `/movies?page=${page}`;
    } else if (type === "genre") {
      url = `/movies/genre/${id}?page=${page}`;
    } else if (type === "country") {
      url = `/movies/country/${id}?page=${page}`;
    } else if (type === "actor") {
      url = `/movies/actor/${id}?page=${page}`;
    }
    const response = await MovieService.getAllMovie(url);
    let data = response.data;
    dispatch(actFetchAllMovie(data.movies, page, data.totalPages));
  };
}

// get list movie search
export function actFetchMovieSearch(movies, currenPage, totalpages,check) {
  return {
    type: ACT_FETCH_MOVIE_SEARCH,
    payload: { movies, currenPage, totalpages,check },
  };
}

export function actFetchMovieSearchAsync({ q, page = 1,check=1 } = {}) {
  return async (dispatch) => {
    const response = await MovieService.getMovieSearch({ q, page: page });
    dispatch(
      actFetchMovieSearch(response.data.movies, page, response.data.totalPages,check)
    );
  };
}

// movie detail
export function actFetchMovieDetail(movie) {
  return {
    type: ACT_FETCH_MOVIE_DETAIL,
    payload: movie,
  };
}

export function actFetchMovieDetailAsync(movieID) {
  return async (dispatch) => {
    const response = await MovieService.getMovieDetail(movieID);
    dispatch(actFetchMovieDetail(response.data));
  };
}

export function actFetchMovieRelate(movie) {
  return {
    type: ACT_FETCH_MOVIE_RELATE,
    payload: movie,
  };
}

export function actFetchMovieRelateAsync(movieID) {
  return async (dispatch) => {
    const response = await MovieService.getMovieRelate(movieID);
    dispatch(actFetchMovieRelate(response.data.relatedMovies));
  };
}


// get list movie
export function actFetchMovieTopView(data) {
  return {
    type: ACT_FETCH_TOP_VIEW,
    payload: { data },
  };
}



export function actFetchAllMovieTopViewAsync() {
  return async (dispatch) => {
    const response = await MovieService.getAllMovieTopView();
    let data = response.data;
    console.log(data)
    dispatch(actFetchMovieTopView(data));
  };
}
