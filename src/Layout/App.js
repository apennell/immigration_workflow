import React, { Component } from 'react';
import BridgeNav from './BridgeNav.jsx';
import Milestones from '../Workflow/Milestones.jsx';
import Header from '../Workflow/Header.jsx';

class App extends Component {

  render() {
    return (
      <div>
      	<BridgeNav />

        <Header />
        
        <Milestones />
      </div>
    );
  }
}

export default App;
