import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';  // you need to create a file path reference unless it is a library

const API_KEY = 'AIzaSyDFEPnBNJkyr2jEidnz2P3fyl2NHymjtAY';

// Create a new component. This component should produce
// some HTML
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  )
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
