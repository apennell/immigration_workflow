import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MilestonePanel from './MilestonePanel.jsx';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">H1-B Workflow</h1>
        <MilestonePanel />
      </div>
    );
  }
}

export default App;
