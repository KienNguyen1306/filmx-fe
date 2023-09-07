import CountryService from "../../services/countryServices";

export const ACT_FETCH_ALL_COUNTRY = "ACT_FETCH_ALL_COUNTRY";

export function actFetchAllCountry(country) {
  return {
    type: ACT_FETCH_ALL_COUNTRY,
    payload: country,
  };
}

export function actFetchAllCountryAsync() {
  return async (dispatch) => {
    const response = await CountryService.getAllCountry();
    dispatch(actFetchAllCountry(response));
  };
}
