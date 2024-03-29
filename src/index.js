import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';  // you need to create a file path reference unless it is a library
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDFEPnBNJkyr2jEidnz2P3fyl2NHymjtAY';

// Create a new component. This component should produce
// some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // success
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      // in ES6, equivalent to this.setState({ videos: videos });
    });
  }

  render() {
    const videoSearch =_.debounce((term) => {this.videoSearch(term)}, 300);
    // debounce will return a new function once every 300 ms.

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
