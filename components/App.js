import React, { Component } from 'react';
import Header from './Header';
import ArthurIntro from './ArthurIntro';
import MainImage from './MainImage';
import BananasImage from './BananasImage';
import ColourBombImage from './ColourBombImage';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="left">
          <ArthurIntro />
        </div>
        <div className="right">
          <MainImage />
          <BananasImage />
          <ColourBombImage />
        </div>
        <div className="footer">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
