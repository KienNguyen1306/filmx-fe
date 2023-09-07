import API from "./api";

const GenreService = {
  getAll: async function (inputParams = {}) {
    let res = await API.call().get(`/genres`, {
      params: {
        ...inputParams,
      },
    });
    return res.data;
  },
  getAllGenre: function () {
    return this.getAll();
  },
};

export default GenreService;
