import React, { Component } from 'react';
// const Component = React.Component;

class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
    // on+eventName={this.eventHandler}
  }

  onInputChange(event) {
    console.log(event.target.value);
  } // generally, handleInputChange or onInputChange
}

// const SearchBar = () => {
//   return <input />;
// };


export default SearchBar; // anyfile that imports SearchBar will get the SearchBar component

// all of the files are silos unless you exclusively connect them.
