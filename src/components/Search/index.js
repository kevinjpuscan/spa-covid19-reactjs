import React from "react";


import {
  Container,
  ContainerResult,
  ContainerItem,
  ContainerEmpty
} from "./styles";

export default function SearchContainer(props) {
 let {countries,toggleClose}=props;
  return (
    <Container>
      
        <ContainerResult>
          {countries.length > 0 ? (
            countries.map(country => (
              <ContainerItem key={country.Slug} onClick={toggleClose}>
                {country.Country}
              </ContainerItem>
            ))
          ) : (
            <ContainerEmpty>
              <p>No hay resultados</p>
            </ContainerEmpty>
          )}
        </ContainerResult>
      
    </Container>
  );
}
