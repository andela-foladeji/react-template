import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu row">
          <div className="col s4 offset-s4 container">
              <div className="row menu-list">
                <div className="col s3">Posts</div>
                <div className="col s3">Articles</div>
                <div className="col s3">Companies</div>
                <div className="col s3">Jobs</div>
              </div>
          </div>
      </div>
    );
  }
}

export default Menu;
