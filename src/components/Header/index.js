import React from "react";

//import { Link } from "react-router-dom";

import { Search,ExitToApp } from "@material-ui/icons";

import SearchContainer from "../Search";

//import { SearchContext } from "../../store/context/SearchContext";



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
  const [countries,setCountries]=React.useState("");
  const [countrySelect,setCountrySelect]=React.useState("");
  


//  const { searchAction } = useContext(SearchContext);
 
  const searchAction = term=>{
    setCountries([{
      "Country": "Republic of the Congo",
      "Slug": "republic-of-the-congo",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Reunion",
      "Slug": "reunion",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Romania",
      "Slug": "romania",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Russia",
      "Slug": "russia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Rwanda",
      "Slug": "rwanda",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Saint Lucia",
      "Slug": "saint-lucia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Saint Vincent and the Grenadines",
      "Slug": "saint-vincent-and-the-grenadines",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "San Marino",
      "Slug": "san-marino",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Saudi Arabia",
      "Slug": "saudi-arabia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Senegal",
      "Slug": "senegal",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Serbia",
      "Slug": "serbia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Seychelles",
      "Slug": "seychelles",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Singapore",
      "Slug": "singapore",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Slovakia",
      "Slug": "slovakia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Slovenia",
      "Slug": "slovenia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Somalia",
      "Slug": "somalia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "South Africa",
      "Slug": "south-africa",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Spain",
      "Slug": "spain",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Sri Lanka",
      "Slug": "sri-lanka",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Sudan",
      "Slug": "sudan",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Suriname",
      "Slug": "suriname",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Sweden",
      "Slug": "sweden",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Switzerland",
      "Slug": "switzerland",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Taiwan*",
      "Slug": "taiwan*",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Tanzania",
      "Slug": "tanzania",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Thailand",
      "Slug": "thailand",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "The Bahamas",
      "Slug": "the-bahamas",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "The Gambia",
      "Slug": "the-gambia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Togo",
      "Slug": "togo",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Trinidad and Tobago",
      "Slug": "trinidad-and-tobago",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Tunisia",
      "Slug": "tunisia",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Turkey",
      "Slug": "turkey",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "Ukraine",
      "Slug": "ukraine",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "United Arab Emirates",
      "Slug": "united-arab-emirates",
      "Provinces": [
          ""
      ]
  },
  {
      "Country": "United Kingdom",
      "Slug": "united-kingdom",
      "Provinces": [
          "Channel Islands",
          "Gibraltar",
          "United Kingdom",
          "Cayman Islands",
          "Montserrat",
          "Bermuda"
      ]
  },
  {
      "Country": "Uruguay",
      "Slug": "uruguay",
      "Provinces": [
          ""
      ]
  }]);
  }

  const handleSearch = e => {
    setTerm(e.target.value);
  };

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

          {term.length > 0 && <SearchContainer toggleClose={toggleClose} countries={countries} />}
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
