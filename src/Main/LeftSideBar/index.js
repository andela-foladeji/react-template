import React, { Component } from 'react';

class LeftBar extends Component {
  render() {
    return (
        <div className="col s3">
            <div className="content">
                <img src="images/profile-image.png" className="responsive-img circle profile-image-big"/>
                <p className="center-align profile-name">Caroline Belfort</p>
                <p className="center-align location">Statton Oakmont</p>
                <div id="profile-summary">
                    <div className="col s12 m6 center-align">
                        <span className="value">358</span><br/>Connections
                    </div>
                    <div className="col s12 m6 center-align">
                        <span className="value">25</span><br/>views
                    </div>
                </div>
                <p className="view-profile center-align"><a href="#">View my profile</a></p>
            </div>
        </div>
    );
  }
}

export default LeftBar;
