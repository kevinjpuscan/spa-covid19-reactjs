import React, { createContext, useReducer } from "react";

import apiGet from "../../service/api";

import { LOADED_COUNTRIES,SEARCH_COUNTRY, SEARCH_FINISH } from "../types/typeSearch";
import { searchReducer } from "../reducer/searchReducer";

export const COUNTRIES='@countries';
export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const initialState = {
    countries: [],
    recommendedCountries:[],
    CountrySelected:'',
    loading: false
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  async function loadCountries (){
    console.log('ejecuta loadCOuntries');
    try {
      let countriesSaved=JSON.parse(localStorage.getItem(COUNTRIES));
      if(countriesSaved){
        //verificar fecha de actualización
        dispatch({ type: LOADED_COUNTRIES, payload: countriesSaved.countries});
      }else{
        const res = await apiGet('countries');
        if (res.status === 200) {
          const data={
            countries:res.data,
            updateAt:'2020-03-21'
          }
          localStorage.setItem(COUNTRIES,JSON.stringify(data));
          dispatch({ type: LOADED_COUNTRIES, payload: res.data });
        }
      }
  
    } catch (error) {
      console.log(error);
    }
  }

  const searchAction = async term => {
    dispatch({ type: SEARCH_COUNTRY });
    try {
      if (term) {

        let countriesFilter=[];
        state.countries.forEach(c => {
          //console.log(c.Slug+' '+term+' '+c.Slug.indexOf(term));
          if(c.Country.toLowerCase().indexOf(term.toLowerCase())>-1){
            countriesFilter.push(c);
          }
        })
      
        dispatch({ type: SEARCH_FINISH, payload: countriesFilter });
     
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SearchContext.Provider
      value={{ 
        countries: state.countries,
        recommendedCountries:state.recommendedCountries,
        CountrySelected:state.CountrySelected, 
        loading: state.loading, 
        loadCountries,
        searchAction }}
    >
      {children}
    </SearchContext.Provider>
  );
}
