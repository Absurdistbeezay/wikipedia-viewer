import React, { Component } from 'react';
import './css/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import './css/Footer.css';

import WikiContainers from './WikiContainers';

class App extends Component {

  render() {
    return (
      <div className="container">
      <Header/>
   
      <WikiContainers/>
     <Footer/>
      </div>
    );
  }
}

export default App;
