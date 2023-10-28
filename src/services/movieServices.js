import API from "./api";

const MovieService = {
  getAll: async function (inputParams = {}) {
    let res = await API.call().get(`/movies`, {
      params: {
        ...inputParams,
      },
    });
    return res.data;
  },
  getAllMovie: function (url) {
    return API.call().get(url);
  },
  getAllMovieTopView: function () {
    return API.call().get('/movies/top-view');
  },
  getMovieRelate: function (movieID) {
    return API.call().get(`/movies/${movieID}/related`);
  },
  getMovieSearch: function ({ q, page = 1 }) {
    return API.call().get(`/movies/search?q=${q}&page=${page}`);
  },
  getMovieDetail: function (movieID) {
    return API.call().get(`/movies/${movieID}`);
  },
  postViewMovie: function (movieID) {
    return API.call().post(`/movies/increase-view/${movieID}`);
  },
};

export default MovieService;
