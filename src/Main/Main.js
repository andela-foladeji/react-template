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
                <div className="each-section">
                    <span className="each-section-title">Summary</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am a very simple card.
                        I am good at containing small bits of information. I am convenient because I require little
                        markup to use effectively. I am a very simple card. I am good at containing small bits of
                        information. I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>

            <div className="content">
                <div className="each-section">
                    <span className="each-section-title">Experiences</span>
                    <div>
                        <p className="experience-summary">
                            <span className="position">Cabin Crew world Manager</span><br/>
                            <span className="company">British Airways</span><br/>
                            <span className="duration">March 2016 - Present (2 years)</span>
                        </p>
                        <img src="images/profile-image.png" className="responsive-img circle company-img" alt=""/>
                        <p className="experience-description">An experience I gathered at An experience I gathered at An experience
                            I gathered at An experience I gathered at An experience I gathered at An experience
                            I gathered at An experience I gathered at</p>
                    </div>
                </div>
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
