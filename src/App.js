import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { CompanyContainer } from './components/CompanyContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CompanyContainer />
      </div>
    );
  }
}

export default App;
