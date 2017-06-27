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
				<ListGroupItem key={task.id}>
					<div className="list-badge">
						<i className="fa fa-check fa-2x" />
					</div>
					<div className="list-content">
						<h3>{task.name}</h3>
						{task.owner ? 
							<p>{task.owner.first_name} {task.owner.last_name}, {task.owner_type}</p>
						:
							<p>User</p>
						}
						{task.completed ?
							<p>Complete</p>
						:
							<p>Incomplete</p>
						}
					</div>
				</ListGroupItem>
			);
		});

  	const milestonePanels = Object.keys(milestones).map((milestone, index) =>
	  	<div 
	  		key={milestone}
	  		className="col-xs-12 col-sm-6 "
	  	>
	  		<Panel 
	  			header={milestones[milestone].milestone_name} 
	  			collapsible
	  		>
		  		<ListGroup fill>
  		      {milestones[milestone].tasks}
  		      <ListGroupItem>
							<div className="list-badge" />
  		      </ListGroupItem>
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