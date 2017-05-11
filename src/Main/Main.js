import React, { Component } from 'react';
import LeftSideBar from './LeftSideBar/';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="container row main">
        <LeftSideBar />
        <div className="col s6">
            <div className="content">
                center
            </div>
        </div>
        <div className="col s3">
            <div className="content">
                center
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
