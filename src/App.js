import React, { Component } from 'react';
import MilestonePanel from './Workflow/MilestonePanel.jsx';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">H1-B Workflow</h1>
        <MilestonePanel workflowData={this.props.workflowData} />
      </div>
    );
  }
}

export default App;
