import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Workflow.css';

class MilestonePanel extends React.Component {
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
  	const header = (
  		<div>
  			<div className="milestone-title">
	  			<h4>{this.props.milestoneName}</h4>
  			</div>
  			<div className="task-count">
  				<h4>{this.props.completed}/{this.props.tasks.length}</h4>
				</div>
  		</div>
		);

  	const panel = (
  		<div className="row">
		  	<div 
		  		key={this.props.milestoneId}
		  		className="col-xs-12"
		  	>
		  		<Panel 
		  			header={header} 
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
			      				<i className="fa fa-check fa-lg" />
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

MilestonePanel.propTypes = {
	milestoneId: PropTypes.number.isRequired,
	milestoneName: PropTypes.string,
	tasks: PropTypes.object,
	completed: PropTypes.bool,
	showAll: PropTypes.bool,
};

MilestonePanel.defaultProps = {
	milestoneName: 'Milestone',
	tasks: {},
	completed: false,
	showAll: false,
};

export default MilestonePanel;