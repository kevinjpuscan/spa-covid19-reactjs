import { SEARCH_COUNTRY, SEARCH_FINISH } from "../types/typeSearch";

export const searchReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_COUNTRY:
      return {
        ...state,
        loading: true
      };
    case SEARCH_FINISH:
      return {
        ...state,
        loading: false,
        countries: action.payload
      };
    default:
      return state;
  }
};
