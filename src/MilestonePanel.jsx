import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class MilestonePanel extends React.Component {
	/**
	 * [bindHelper looks like it binds this to method names so you don't have to specifiy it
	 */
	bindHelper(...methodNames) {
		methodNames.forEach((methodName) => this[methodName] = this[methodName].bind(this));
	}

	constructor(props) {
		super(props);

		// methods to bind
		this.bindHelper(

		);

		// getInitialState
		this.state = {

		};


	}

  render() {
  	const title = (
  	  <h3>{this.props.workflowData.tasks[0].owner_type}</h3>
  	);

  	const milestones = [
  		"Onboarding", 
  		"Labor Condition Application",
  		"Petition",
  		"Review",
  		"Filing",
  		"Post-Filing"
		]
;
  	const milestonePanels = milestones.map((milestone) =>
  		<Panel 
  			key={milestone}
  			header={milestone} 
  			collapsible
  		>
  		  {milestone} content
  		</Panel>
  	);

  	return(
		  <div>
		    {milestonePanels}
		  </div>
	  );
	}
}

export default MilestonePanel;