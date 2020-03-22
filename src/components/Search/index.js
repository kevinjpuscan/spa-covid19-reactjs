import React, {useContext} from "react";

import Spinner from "../Spinner";
import ItemSearch from "../ItemSearch";

import {SearchContext} from '../../store/context/SearchContext';

import {
  Container,
  ContainerResult,
  ContainerEmpty
} from "./styles";

export default function SearchContainer({toggleClose}) {
  const { loading,recommendedCountries} = useContext(SearchContext);
  return (
    <Container>
      {loading ? (
        <Spinner style={{ marginTop: "10px" }} />
      ) : (
        <ContainerResult>
          {recommendedCountries.length > 0 ? (
            recommendedCountries.map(country => (
              
                <ItemSearch key={country.Slug} slug={country.Slug} country={country.Country} event={toggleClose}/>
              
            ))
          ) : (
            <ContainerEmpty>
              <p>No hay resultados</p>
            </ContainerEmpty>
          )}
        </ContainerResult>
      )}
    </Container>
  );
}
