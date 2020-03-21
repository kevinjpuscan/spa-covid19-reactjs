import React,{useContext} from 'react';

import Header from '../../components/Header';

import {CountryContext} from '../../store/context/CountryContext';


import {
  Container,
  Aside,
  ContainerBody,
  ContainerChart,
  ContainerFooter
} from "./styles";

function Main({ match }) {
  const {loadDataCountryAction} = useContext(CountryContext) ;

  React.useEffect(() => {
    const { country } = match.params;
    loadDataCountryAction(country);
    return () => {
      //reset();
    };

    //eslint-disable-next-line
  }, [match.params]);

  return (

    <div>
        <Header />
        <Container>
    
        <Aside>
          
          <ContainerBody>
            
          </ContainerBody>
          <ContainerFooter>
            Información - AyudaPrensa - API - Empleo - Privacidad - Condiciones -
            Directorio - Perfiles - Hashtags - Idioma
          </ContainerFooter>
        </Aside>

        <ContainerChart>
          <h1>{match.params.country}</h1>  
        </ContainerChart>
      </Container>
      </div>

  );
}

export default Main;
