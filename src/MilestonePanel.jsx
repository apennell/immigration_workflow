import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import workflowData from '../src/H-1B_tasks.json';

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
  	const tasks = workflowData.tasks;
  	console.log(tasks);

  	// create object with milestone arrays to accept tasks
  	const milestones = {
  		385: {
  			"milestone_name": "Onboarding",
  			"tasks": []
  		}, 
  		386: {
  			"milestone_name": "Labor Condition Application",
  			"tasks": []
  		},
  		387: {
  			"milestone_name": "Petition",
  			"tasks": []
  		},
  		388: {
  			"milestone_name": "Review",
  			"tasks": []
  		},
  		389: {
  			"milestone_name": "Filing",
  			"tasks": []
  		},
  		390: {
  			"milestone_name": "Post-Filing",
  			"tasks": []
  		}
		};

		tasks.map((task) => {
			milestones[task.milestone_id].tasks.push(
				<ListGroupItem>{task.name}</ListGroupItem>
			);
		});

		console.log(milestones);

  	const milestonePanels = Object.keys(milestones).map((milestone, index) =>
	  	<div 
	  		key={milestone}
	  		className="col-xs-12"
	  	>
	  		<Panel 
	  			header={milestones[milestone].milestone_name} 
	  			collapsible
	  		>
		  		<ListGroup fill>
  		      {milestones[milestone].tasks}
  		    </ListGroup>
	  		</Panel>
  		</div>
  	);

  	return(
		  <div className="row">
		    {milestonePanels}
		  </div>
	  );
	}
}

export default MilestonePanel;