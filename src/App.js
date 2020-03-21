import React from 'react';
import './App.css';

import Header from './components/Header';

import {
  Container,
  Aside,
  ContainerBody,
  ContainerChart,
  ContainerFooter
} from "./styles/styles";

function App() {
  return (
    <div className="App">

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

export default App;
