import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
        <div className="header">
          <a className="hover-effect" href="https://dribbble.com/arthurchayka">
            <span className="hover-effect" id="see-more">see more</span>
          </a>
          <span> | </span>
          <a className="hover-effect" href="https://www.instagram.com/arthurchayka/">
            <span className="hover-effect" id="feel-more">feel more</span>
          </a>
        </div>
    )
  }
}

export default Header;
