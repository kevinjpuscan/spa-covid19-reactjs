import React,{useContext} from "react";

//import { Link } from "react-router-dom";

import { Search,ExitToApp } from "@material-ui/icons";

import SearchContainer from "../Search";
import { SearchContext } from "../../store/context/SearchContext";



import {
  Nav,
  Container,
  ContainerSearch,
  Input,
  Logo,
  ContainerOpcitions
} from "./styles";



function Header() {
  const [term, setTerm] = React.useState("");
  const [savedCountries, setsavedCountries] = React.useState("");

  const { searchAction,loadCountries } = useContext(SearchContext);


  const handleSearch = e => {
    setTerm(e.target.value);
  };


  React.useEffect(() => {
    loadCountries();
  }, [savedCountries]);

    React.useEffect(() => {
    searchAction(term);

    //eslint-disable-next-line
  }, [term]);

  const toggleClose = function(){
    setTerm("");
  };
  return (
    <Nav>
      <Container>
        <Logo href="/">
          COVIT19
        </Logo>
        <ContainerSearch>
          <Search
            style={{
              fontSize: 33,
              color: "#999",
              background: "#FAFAFA",
              border: "1px solid #e6e6e6",
              borderRight: "0px",
              borderRadius: "4px 0px 0px 4px",
              padding: "7px 5px"
            }}
        />
          <Input placeholder="Buscar" value={term} onChange={handleSearch} />

          {term.length > 0 && <SearchContainer toggleClose={toggleClose} />}
        </ContainerSearch>
        <ContainerOpcitions>
        <ExitToApp
            style={{
              color: "#2c2c2c",
              fontSize: 30,
              marginLeft: 15,
              cursor: "pointer"
            }}
          />
        </ContainerOpcitions>
      </Container>
    </Nav>
  );
}

export default Header;
