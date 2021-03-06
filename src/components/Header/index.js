import React,{useContext} from "react";

import { Redirect} from "react-router-dom";

import { Search} from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';


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
  const [savedCountries] = React.useState("");

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
          COVID19
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
          <a href="https://github.com/kevinjpuscan/spa-covid19-reactjs">
            <GitHubIcon 
              style={{
                color: "#2c2c2c",
                fontSize: 30,
                marginLeft: 15,
                cursor: "pointer"
              }}
            />
          </a>
        
        </ContainerOpcitions>
      </Container>
    </Nav>
  );
}

export default Header;
