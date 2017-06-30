import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Workflow.css';

class MilestonePanel extends React.Component {
	/**
	 * [bindHelper binds this to method names so you don't have to specifiy it
	 */
	// bindHelper(...methodNames) {
	// 	methodNames.forEach((methodName) => this[methodName] = this[methodName].bind(this));
	// }

	constructor(props) {
		super(props);

		this.state = {
			open: false,
		}

	}

	componentDidUpdate(prevProps, prevState) {
		// if showAll was clicked, reset local open state
		if (prevProps.showAll !== this.props.showAll) {
			if (this.props.showAll) {
				this.setState({
					open: true
				});
			} else {
				this.setState({
					open: false
				});
			}
		} 
	}

  render() {
  	const panel = (
  		<div className="row">
		  	<div 
		  		key={this.props.milestoneId}
		  		className="col-xs-12"
		  	>
		  		<Panel 
		  			header={`${this.props.milestoneName} -- ${this.props.completed}/${this.props.tasks.length}`} 
		  			collapsible
		  			expanded={this.state.open}
		  			onClick={()=> this.setState({ open: !this.state.open })}
		  		>
			  		<ListGroup fill>
			  			{/** list of tasks */}
	  		      {this.props.tasks}

	  		      {/** empty bottom circle */}
	  		      <ListGroupItem>
	  		      	{this.props.completed === this.props.tasks.length ?
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
  		</div>
  	);

  	return(
		  <div>
		    {panel}
	    </div>
	  );
	}
}

export default MilestonePanel;