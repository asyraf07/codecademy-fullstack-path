// import logo from './logo.svg';
import React from "react"; 
import "./App.css";

import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {
        name: "",
        artist: "",
        album: "",
        id: 3,
      }
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

