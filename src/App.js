import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
