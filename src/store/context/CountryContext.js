import React, { createContext, useReducer } from "react";

import apiGet from "../../service/api";

import {countryReducer} from "../reducer/countryReducer";
import {GET_COUNTRY,FINISH_COUNTRY,RESET_COUNTRY,GET_SUMMARY,FINISH_SUMMARY} from "../types/typesCountry";

export const CountryContext = createContext();



export default function CountryContextProvider({ children }) {
    const initialState = {
      country:'',
      confirmed:[],
      deaths:[],
      recovered:[],
      summary:[],

      loading: false
    };
  
    const [state, dispatch] = useReducer(countryReducer, initialState);
  
  
    const loadDataCountryAction = async slug => {
      dispatch({ type: GET_COUNTRY });
      try {
        if (slug) {
            let caseConfirmed= await apiGet(`country/${slug}/status/confirmed`);
            let caseDeaths= await apiGet(`country/${slug}/status/deaths`);
            let caseRecovered= await apiGet(`country/${slug}/status/recovered`);

            let total=caseConfirmed.data.length;

            //estructuramos la información
            let data={
                country:{
                    name:caseConfirmed.data[total-1].Country,
                    date:caseConfirmed.data[total-1].Date,
                    confirmed:caseConfirmed.data[total-1].Cases,
                    deaths:caseDeaths.data[total-1].Cases,
                    recovered:caseRecovered.data[total-1].Cases
                },
                confirmed:caseConfirmed.data,
                deaths:caseDeaths.data,
                recovered:caseRecovered.data
            }

          dispatch({ type:FINISH_COUNTRY, payload: data });
       
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    async function loadSummaryAction(){
      dispatch({ type: GET_SUMMARY });
      try {
        let summary = await apiGet('summary');
        let data=summary.data.Countries;
        if(!data){
          data=console.log(JSON.parse(summary.data).Countries);
        }
  
        dispatch({ type:FINISH_SUMMARY, payload: data});
      } catch (error) {
        console.log(error);
      }

    };

    function resetCountry(){
        dispatch({ type: RESET_COUNTRY });
      };

    return (
      <CountryContext.Provider
        value={{ 
          country: state.country,
          confirmed:state.confirmed,
          deaths:state.deaths,
          recovered:state.recovered,
          summary:state.summary,
          loading: state.loading, 
          loadDataCountryAction,
          loadSummaryAction,
          resetCountry }}
      >
        {children}
      </CountryContext.Provider>
    );
  }
  
