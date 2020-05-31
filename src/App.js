import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Myblog from './containers/Myblog'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Myblog></Myblog>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
