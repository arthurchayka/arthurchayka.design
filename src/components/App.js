import React, { Component } from 'react';
import Header from './Header';
import ArthurIntro from './ArthurIntro';
import MainImage from './MainImage';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ArthurIntro />
        <MainImage />
        <div className="left">
          <p>yo this is arthur's website.</p>
          <p>ok bye bye now</p>
        </div>
        <div className="right">
          <img src="http://68.media.tumblr.com/eb82ffe1c04827a57ebe71e59df862b5/tumblr_ojw9zx0wJb1r9ij87o1_1280.jpg" alt="banana" />
        </div>
      </div>
    );
  }
}

export default App;
