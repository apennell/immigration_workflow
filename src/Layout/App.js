import React, { Component } from 'react';
import BridgeNav from './BridgeNav.jsx';
import MilestonePanel from '../Workflow/MilestonePanel.jsx';
import Header from '../Workflow/Header.jsx';

class App extends Component {

  render() {
    return (
      <div>
      	<BridgeNav />

        <Header />
        
        <MilestonePanel />
      </div>
    );
  }
}

export default App;
