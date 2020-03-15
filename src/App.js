/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import Searcgform from './Form'
import Body from './Body'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      images: []
    };
  }

  // This callback function is responsible for getting the data from Form component child
  myCallback = (dataFromChild) => {
    this.setState({ searchValue: dataFromChild });
  }

  /**
   * This function fetchs the data from Gify API and we get a new array of objects
   * from it and set the new value to out images array in the state
   */
  loadGifs = async () => {
    await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=6g1ejTMvjizWD8rGmVTfiF3tNYp9MHDW&q=cat&limit=25&offset=0&rating=G&lang=en&q=${this.state.searchValue}`)
      .then(res => {
        const images = res.data.data;
        this.setState({ images })
      })
      .catch(function () {
        console.log("Couldn't get gifs");
      })
  }

  render() {
    return (
      <div className="App">
        <Searcgform
          callbackFromParent={this.myCallback}
          loadGifs={this.loadGifs}
        />
        <Body images={this.state.images} />
      </div>
    );
  }

}

export default App;
