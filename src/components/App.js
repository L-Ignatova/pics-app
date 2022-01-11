
import React from 'react';
import unsplashAPI from "../api/unsplash";
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const SEARCH_PHOTOS_URL = `/search/photos`;

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit(term) {
    unsplashAPI.get(`${SEARCH_PHOTOS_URL}`, {
      params: { query: term },
    }).then(response => this.setState({ images: response.data.results }));

  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
