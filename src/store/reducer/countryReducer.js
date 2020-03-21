import {GET_COUNTRY,FINISH_COUNTRY,RESET_COUNTRY} from "../types/typesCountry";

export const countryReducer = (state, action) => {
  console.log(action.payload);
  console.log(action.type);
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
