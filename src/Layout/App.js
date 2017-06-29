import React, { Component } from 'react';
import BridgeNav from './BridgeNav.jsx';
import MilestonePanel from '../Workflow/MilestonePanel.jsx';

class App extends Component {

  render() {
    return (
      <div>
      	<BridgeNav />

        <h1 className="text-center">H1-B Workflow</h1>
        
        <MilestonePanel />
      </div>
    );
  }
}

export default App;
