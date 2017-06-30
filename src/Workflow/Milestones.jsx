import React, { Component } from 'react';
import $ from 'jquery';
import ListItem from './ListItem.jsx';
import MilestonePanel from './MilestonePanel.jsx';
import workflowData from '../H-1B_tasks.json';
import './Workflow.css';

class Milestones extends React.Component {
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
			'getPanel',
			'getMilestoneGrid'
		);

		let viewSize = 'lg';
		if ($(window).width() < 768) {
			viewSize = 'xs'
		} else if ($(window).width() < 1200) {
			viewSize = 'md'
		}

		this.state = {
			viewSize: viewSize,
			showAll: false,
		};

  	// create object with milestone arrays to accept tasks
  	this.milestones = {
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

  	const tasks = workflowData.tasks;

		tasks.map((task) => {
			// get total completed for milestone by increasing if this task done
			if (task.completed) {
				this.milestones[task.milestone_id].completed ++;
			};

			// construct the task view and push to milestone's task list
			return this.milestones[task.milestone_id].tasks.push(
				<ListItem 
					key={task.id}
					task={task} 
					milestone={this.milestones[task.milestone_id].milestone_name}
					user={workflowData.user}
				/>
			);
		});

	}

	componentDidMount() {
		$(window).resize(this.resizer.bind(this));
	}

	componentWillUnmount() {
		$(window).off('resize', this.resizer);
	}

	resizer() {
		let viewSize = 'lg';
		if ($(window).width() < 768) {
			viewSize = 'xs'
		} else if ($(window).width() < 1200) {
			viewSize = 'md'
		}

		if (viewSize !== this.state.viewSize) {
			this.setState({
				viewSize: viewSize
			});
		}
	}

	getPanel(milestone) {
		return (  	
			<div 
	  		key={milestone}
	  	>
				<MilestonePanel 
					milestoneId={milestone} 
					milestoneName={this.milestones[milestone].milestone_name}
					tasks={this.milestones[milestone].tasks}
					completed={this.milestones[milestone].completed}
					showAll={this.state.showAll}
				/>			 
			</div>
		);
	}

	getMilestoneGrid() {
  	if (this.state.viewSize === 'xs') {
	  	return (
	  		<div>
		  		{this.getPanel(385)}
		  		{this.getPanel(386)}
		  		{this.getPanel(387)}
		  		{this.getPanel(388)}
		  		{this.getPanel(389)}
		  		{this.getPanel(390)}
	  		</div>
  		);
  	} else if (this.state.viewSize === 'md') {
  		return (
				<div className="row">
	  			<div className="col-sm-6 col-lg-4">
	  				{this.getPanel(385)}
	  				{this.getPanel(387)}
	  				{this.getPanel(389)}
	  			</div>
	  			<div className="col-sm-6 col-lg-4">
	  				{this.getPanel(386)}
	  				{this.getPanel(388)}
	  				{this.getPanel(390)}
	  			</div>
				</div>
			);
  	} else {
  		return (
  			<div className="row">
	  			<div className="col-sm-6 col-lg-4">
	  				{this.getPanel(385)}
	  				{this.getPanel(388)}
	  			</div>
	  			<div className="col-lg-4">
	  				{this.getPanel(386)}
	  				{this.getPanel(389)}
	  			</div>
	  			<div className="col-lg-4">
	  				{this.getPanel(387)}
	  				{this.getPanel(390)}
	  			</div>
  			</div>
			);
  	}
	}

  render() {
  	return(
  		<div className="container">
			  <div className="row">
			  	<div className="col-xs-12">
				    <button 
					    className="btn btn-default"
				    	onClick={ ()=> this.setState({ showAll: !this.state.showAll })}
				    >
				    	Show all tasks
				    </button>
				   </div>
		    </div>

		    {this.getMilestoneGrid()}
		  </div>
	  );
	}
}

export default Milestones;