import React, { createContext, useReducer } from "react";

//import api from "../../services/api";

import { SEARCH_COUNTRY, SEARCH_FINISH } from "../types/typeSearch";
import { searchReducer } from "../reducer/searchReducer";

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const initialState = {
    countries: [],
    loading: false
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const searchAction = async term => {
    dispatch({ type: SEARCH_COUNTRY });
    try {
      if (term) {
        //const res = await api.get(`/search/${term}`);
        const res ={
          status:200,
          data:[{
            "Country": "Ukraine",
            "Slug": "ukraine",
            "Provinces": [
                ""
            ]
        }]
        }
        if (res.status === 200) {
          dispatch({ type: SEARCH_FINISH, payload: res.data });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SearchContext.Provider
      value={{ countries: state.countries, loading: state.loading, searchAction }}
    >
      {children}
    </SearchContext.Provider>
  );
}
