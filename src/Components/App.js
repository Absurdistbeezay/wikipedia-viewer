import React, { Component } from 'react';
import './css/App.css';
import Header from './Header.js';

import WikiContainers from './WikiContainers';

class App extends Component {

  render() {
    return (
      <div className="container">
      <Header/>
   
      <WikiContainers/>
      </div>
    );
  }
}

export default App;
