import API from "./api";

const ArtorService = {
  getAll: async function (inputParams = {}) {
    let res = await API.call().get(`/actor`, {
      params: {
        ...inputParams,
      },
    });
    return res.data;
  },
  getAllArtor: function () {
    return this.getAll();
  },
};

export default ArtorService;
