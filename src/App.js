import React from 'react';
import './App.css';

import Routes from "./routes";

import SearchContextProvider from "./store/context/SearchContext";



function App() {
  return (
    <div className="App">
    <SearchContextProvider>
        <Routes />
    </SearchContextProvider>
    </div>
  );
}

export default App;
