import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container row">
          <div className="col s3">
            <a href="#" className="logo"><img src="images/logo.png" title="LinkedIn" alt="LinkedIn" /></a>
            <div className="discover">
              <a className='nav-dropdown' href='#' data-activates='nav-drop'>
                Discover <i className="fa fa-caret-down" id="drop-arrow" aria-hidden="true"></i>
              </a>
              <ul id='nav-drop' className='dropdown-content'>
                <li><a href="#!">Profile</a></li>
                <li><a href="#!">Search</a></li>
                <li><a href="#!">Discover</a></li>
              </ul>
            </div>
          </div>

          <div className="hide-on-med-and-down col s6 search">
            <i className="fa fa-search" id="search-icon" aria-hidden="true"></i>
            <input type="text" placeholder="Search LinkedIn" id="search-text"/>
          </div>

          <div className="col s3">
            <ul id="options" className="right hide-on-med-and-down">
              <li><a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-flag-o" aria-hidden="true"></i></a></li>
              <li><a href="#"><img src="images/logo.png" className="profile-image"/></a></li>
            </ul>
          </div>
        </div>
    </nav>
    );
  }
}

export default NavBar;
