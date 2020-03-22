import React,{useContext} from 'react';

import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import Detail from '../../components/Detail';

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
              <Detail country={country}/> 
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
              <p></p>
            )
          }
          
        </ContainerChart>
      </Container>
      </div>

  );
}

export default Main;
