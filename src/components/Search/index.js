import React, {useContext} from "react";

import Spinner from "../Spinner";
import ItemSearch from "../ItemSearch";

import {SearchContext} from '../../store/context/SearchContext';

import {
  Container,
  ContainerResult,
  ContainerItem,
  ContainerEmpty
} from "./styles";

export default function SearchContainer({toggleClose}) {
  const { loading, countries } = useContext(SearchContext);
  return (
    <Container>
      {loading ? (
        <Spinner style={{ marginTop: "10px" }} />
      ) : (
        <ContainerResult>
          {countries.length > 0 ? (
            countries.map(country => (
              <ContainerItem onClick={toggleClose}>
                <ItemSearch slug={country.Slug} country={country.Slug} />
              </ContainerItem>
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
