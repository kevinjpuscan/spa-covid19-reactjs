import {GET_COUNTRY,FINISH_COUNTRY,RESET_COUNTRY,GET_SUMMARY,FINISH_SUMMARY} from "../types/typesCountry";

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
        country:action.payload.country,
        confirmed: action.payload.confirmed,
        deaths: action.payload.deaths,
        recovered: action.payload.recovered
      };
    case GET_SUMMARY:
      return {
        ...state,
        loading: true
      };

    case FINISH_SUMMARY:
      return {
        ...state,
        loading: false,
        summary:action.payload,
      };
    
    case RESET_COUNTRY:
      return {
        ...state,
        loading: false,
        country: '',
        confirmed:[],
        deaths:[],
        recovered:[]
      };
    default:
      return state;
  }
};
