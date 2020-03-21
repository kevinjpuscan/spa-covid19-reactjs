import React from 'react';
import './App.css';

import Routes from "./routes";

import SearchContextProvider from "./store/context/SearchContext";
import CountryContextProvider from "./store/context/CountryContext";



function App() {
  return (
    <div className="App">
    <SearchContextProvider>
      <CountryContextProvider>
        <Routes />
      </CountryContextProvider> 
    </SearchContextProvider>
    </div>
  );
}

export default App;
