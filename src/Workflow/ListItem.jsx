import React, { Component } from 'react';
import { ListGroupItem, Modal } from 'react-bootstrap';
import TaskModal from './TaskModal.jsx';
import './Workflow.css';

class ListItem extends React.Component {
	/**
	 * [bindHelper looks like it binds this to method names so you don't have to specifiy it
	 */
	bindHelper(...methodNames) {
		methodNames.forEach((methodName) => this[methodName] = this[methodName].bind(this));
	}

	constructor(props) {
		super(props);

		// get initial state
		this.state = {
			showModal: false
		};

		// methods to bind
		this.bindHelper(
			'closeMe',
			'openMe'
		);

	}

	closeMe() {
		this.setState({ showModal: false });
	}

	openMe() {
	  this.setState({ showModal: true });
	}

  render() {
  	return(
  		<div>
			  <ListGroupItem onClick={this.openMe}>
					<div className="list-badge">
						{this.props.task.completed ?
							<i className="fa fa-check fa-2x" />
						:
							<i className="fa fa-user fa-2x" />
						}
					</div>
					<div className="list-content">
						<h3>{this.props.task.name}</h3>
						{this.props.task.owner ? 
							<p>{this.props.task.owner.first_name} {this.props.task.owner.last_name}, {this.props.task.owner_type}</p>
						:
							<p>User</p>
						}
					</div>
				</ListGroupItem>

				<Modal 
					show={this.state.showModal} 
					onHide={(e) => this.closeMe(e)}
				>
					<TaskModal onClose={this.closeMe} />
				</Modal>
			</div>
	  );
	}
}

export default ListItem;