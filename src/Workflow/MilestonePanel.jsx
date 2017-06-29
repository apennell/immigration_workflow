import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import ListItem from './ListItem.jsx';
import workflowData from '../H-1B_tasks.json';
import './Workflow.css';

class MilestonePanel extends React.Component {
	/**
	 * [bindHelper looks like it binds this to method names so you don't have to specifiy it
	 */
	// bindHelper(...methodNames) {
	// 	methodNames.forEach((methodName) => this[methodName] = this[methodName].bind(this));
	// }

	constructor(props) {
		super(props);

		// methods to bind
		// this.bindHelper(
		// 	'checkMilestone'
		// );
		this.state = {
			open385: false,
			open386: false,
			open387: false,
			open388: false,
			open389: false,
			open390: false,
			open: false,
		}

	}

	// checkMilestone(milestone) {
	// 	console.log(milestone);
	// 	return milestone.id % 2 === 0;
	// }

  render() {
  	const tasks = workflowData.tasks;

  	// create object with milestone arrays to accept tasks
  	const milestones = {
  		385: {
  			"milestone_name": "Onboarding",
  			"tasks": [],
  			"completed": 0
  		}, 
  		386: {
  			"milestone_name": "Labor Condition Application",
  			"tasks": [],
  			"completed": 0
  		},
  		387: {
  			"milestone_name": "Petition",
  			"tasks": [],
  			"completed": 0
  		},
  		388: {
  			"milestone_name": "Review",
  			"tasks": [],
  			"completed": 0
  		},
  		389: {
  			"milestone_name": "Filing",
  			"tasks": [],
  			"completed": 0
  		},
  		390: {
  			"milestone_name": "Post-Filing",
  			"tasks": [],
  			"completed": 0
  		}
		};

		// add each task to their respective milestone object
		tasks.map((task) => {
			// get total completed for milestone by increasing if this task done
			if (task.completed) {
				milestones[task.milestone_id].completed ++;
			};

			return milestones[task.milestone_id].tasks.push(
				<ListItem 
					key={task.id}
					task={task} 
					milestone={milestones[task.milestone_id].milestone_name}
					user={workflowData.user}
				/>
			);
		});

		// let evenMilestones = Object.keys(milestones).filter(this.checkMilestone);
		// console.log(evenMilestones);

  	// create panel for each milestone and push to row
  	const milestonePanels = Object.keys(milestones).map((milestone, index) => {

	  	
	  	return(
		  	<div 
		  		key={milestone}
		  		className="col-xs-12 col-sm-6"
		  	>
		  		<Panel 
		  			header={`${milestones[milestone].milestone_name} -- ${milestones[milestone].completed}/${milestones[milestone].tasks.length}`} 
		  			collapsible
		  		>
			  		<ListGroup fill>
			  			{/** list of tasks */}
	  		      {milestones[milestone].tasks}

	  		      {/** empty bottom circle */}
	  		      <ListGroupItem>
	  		      	{milestones[milestone].completed === milestones[milestone].tasks.length ?
	  		      		<div className="list-badge completed">
			      				<i className="fa fa-check fa-2x" />
	  		      		</div>
	  		      	:
	  		      		<div className="list-badge" />
	  		      	}
	  		      </ListGroupItem>
	  		    </ListGroup>
		  		</Panel>
	  		</div>
  		);
  	});

  	return(
  		<div className="container">
			  <div className="row">
			  	<div className="col-xs-12">
				    <button 
					    className="btn btn-default"
				    	onClick={ ()=> this.setState({ open: !this.state.open })}
				    >
				    	Show all tasks
				    </button>
				   </div>
		    </div>

			  <div className="row">
			    {milestonePanels}
		    </div>
		  </div>
	  );
	}
}

export default MilestonePanel;