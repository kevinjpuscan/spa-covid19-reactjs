import {GET_COUNTRY,FINISH_COUNTRY} from "../types/typesCountry";

export const countryReducer = (state, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        loading: true
      };

    case FINISH_COUNTRY:
      return {
        ...state,
        loading: false,
        country: action.payload,
      };
    default:
      return state;
  }
};
