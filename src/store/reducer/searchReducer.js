import {LOADED_COUNTRIES, COUNTRY_SELECTED,SEARCH_COUNTRY, SEARCH_FINISH } from "../types/typeSearch";

export const searchReducer = (state, action) => {
  switch (action.type) {
    case LOADED_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: true
      };
    case COUNTRY_SELECTED:
      return {
        ...state,
        countrySelected: action.payload,
        loading: true
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        loading: true
      };
    case SEARCH_FINISH:
      return {
        ...state,
        loading: false,
        recommendedCountries: action.payload,
      };
    default:
      return state;
  }
};
