import {
  ACT_FETCH_ALL_MOVIE,
  ACT_FETCH_MOVIE_DETAIL,
  ACT_FETCH_MOVIE_RELATE,
  ACT_FETCH_MOVIE_SEARCH,
  ACT_FETCH_TOP_VIEW,
  SET_PRODUCT_TYPE,
  SET_RELOAD,
} from "./action";

const initState = {
  listMovie: { lists: [], currenPage: 1, totalpages: 0, loading: true },
  listMovieTopView: { lists: [], currenPage: 1, totalpages: 0, loading: true },
  movieSearch: {
    lists: [],
    currenPage: 1,
    totalpages: 0,
    loading: true,
    check: 1,
  },
  movieDetail: {},
  movieRelate: [],
  type: { name: "all", id: 0, title: "Phim mới cập nhập" },
  reload: 0,
};

function movieReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_MOVIE:
      return {
        ...state,
        listMovie: {
          lists:
            action.payload.currenPage === 1
              ? action.payload.movies
              : [...state.listMovie.lists, ...action.payload.movies],
          currenPage: action.payload.currenPage,
          totalpages: action.payload.totalpages,
          loading: false,
        },
      };
    case ACT_FETCH_MOVIE_SEARCH:
      return {
        ...state,
        movieSearch: {
          lists:
            action.payload.currenPage === 1
              ? state.movieSearch.check === 1
                ? action.payload.movies
                : [...state.movieSearch.lists]
              : [...state.movieSearch.lists, ...action.payload.movies],
          currenPage: action.payload.currenPage,
          totalpages: action.payload.totalpages,
          check: action.payload.check,
          loading: false,
        },
      };
    case ACT_FETCH_MOVIE_DETAIL:
      return { ...state, movieDetail: action.payload };
    case ACT_FETCH_MOVIE_RELATE:
      return {
        ...state,
        listMovie: { ...state.listMovie, loading: false },
        movieRelate: action.payload,
      };
    case SET_PRODUCT_TYPE:
      return {
        ...state,
        listMovie: { lists: [], currenPage: 0, totalpages: 0, loading: true },
        type: {
          name: action.payload.type,
          id: action.payload.id,
          title: action.payload.title,
        },
      };
    case SET_RELOAD:
      return {
        ...state,
        reload: action.payload,
      };
    case ACT_FETCH_TOP_VIEW:
      return {
        ...state,
        listMovieTopView: { lists: action.payload.data },
      };
    default:
      return state;
  }
}

export default movieReducer;
