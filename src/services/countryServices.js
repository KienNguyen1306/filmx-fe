import API from "./api";

const countryServices = {
  getAll: async function (inputParams = {}) {
    let res = await API.call().get(`/countries`, {
      params: {
        ...inputParams,
      },
    });
    return res.data;
  },
  getAllCountry: function () {
    return this.getAll();
  },
};

export default countryServices;
