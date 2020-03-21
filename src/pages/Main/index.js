import React from 'react';

import Header from '../../components/Header';


import {
  Container,
  Aside,
  ContainerBody,
  ContainerChart,
  ContainerFooter
} from "./styles";

function Main() {
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
        
        </ContainerChart>
      </Container>
      </div>

  );
}

export default Main;
