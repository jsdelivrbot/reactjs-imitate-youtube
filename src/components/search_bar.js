import React, { Component } from 'react';
// const Component = React.Component;

class SearchBar extends Component {

  // state only exists in the class based component.
  constructor(props) {
    super(props);
    // calling the parent method

    this.state = {term: ''};
  }

  render() {
    // this.state.term = event.target.value >> this is really BAD. Only use. setState();
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value  })} />
      </div>
    );
    // on+eventName={this.eventHandler}

  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // } // generally, handleInputChange or onInputChange
}

// const SearchBar = () => {
//   return <input />;
// };


export default SearchBar; // anyfile that imports SearchBar will get the SearchBar component

// all of the files are silos unless you exclusively connect them.
