import React,{useContext} from 'react';

import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

import {CountryContext} from '../../store/context/CountryContext';


import {
  Container,
  Aside,
  ContainerBody,
  ContainerChart,
  ContainerFooter
} from "./styles";

function Main({ match }) {
  const {
    country,
    confirmed,
    deaths,
    recovered,
    loading,
    loadDataCountryAction,
    resetCountry
  } = useContext(CountryContext) ;

  React.useEffect(() => {
    const { country } = match.params;
    resetCountry();

    if(country){
      loadDataCountryAction(country);
    }
    
    return () => {

    };

    //eslint-disable-next-line
  }, [match.params]);

  return (

    <div>
        <Header />
        <Container>
    
        <Aside>
          
          <ContainerBody>
          {
            loading ? 
            (
              <Spinner style={{ marginTop: "100px" }} />
            ):
            (
              <h3>{match.params.country}</h3>  
            )
          }
          </ContainerBody>
          <ContainerFooter>
            Información - AyudaPrensa - API - Empleo - Privacidad - Condiciones -
            Directorio - Perfiles - Hashtags - Idioma
          </ContainerFooter>
        </Aside>

        <ContainerChart>
          {
            loading ? 
            (
              <Spinner style={{ marginTop: "100px" }} />
            ):
            (
              <div>
                <h1>{country.name}</h1>
                <p>Casos Confirmados: {country.confirmed}</p>  
                <p>Casos Fallecidos: {country.deaths}</p>  
                <p>Casos Recuperados: {country.recovered}</p>  
              </div>
              
            )
          }
          
        </ContainerChart>
      </Container>
      </div>

  );
}

export default Main;
