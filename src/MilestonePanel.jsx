import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

const title = (
  <h3>Panel title</h3>
);

class MilestonePanel extends React.Component {
  render() {
  	return(
		  <div>
		    <Panel header="Panel heading without title" collapsible>
		      Panel content
		    </Panel>
		    <Panel header={title} collapsible>
		      Panel content
		    </Panel>
		  </div>
	  );
	}
}

export default MilestonePanel;