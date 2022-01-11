
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const ROOT_URL = `https://api.unsplash.com`;
const SEARCH_PHOTOS_URL = `/search/photos`;

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit(term) {
    axios.get(`${ROOT_URL}${SEARCH_PHOTOS_URL}`, {
      params: { query: term },
      headers: {
        Authorization: `Client-ID DCmeL44GUCSGoplySK6jRphUH0mQEZXD2ITbgBd_W7c`
      },
    }).then(response => this.setState({ images: response.data.results }));
    
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)}/>
        <div>Found: {this.state.images.length} images</div>
      </div>
    );
  }
}

export default App;
