import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Modal } from 'react-bootstrap';
import TaskModal from './TaskModal.jsx';
import './Workflow.css';

class ListItem extends React.Component {
	/**
	 * [bindHelper binds this to method names so you don't have to specifiy it
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
							<i className="fa fa-check fa-lg" />
						:
							<i className="fa fa-user fa-lg" />
						}
					</div>
					<div className="list-content">
						<h4>{this.props.task.name}</h4>
						{this.props.task.owner ? 
							<p>{this.props.task.owner.first_name} {this.props.task.owner.last_name}, {this.props.task.owner_type}</p>
						:
							<p>{this.props.user.full_name}, User</p>
						}
					</div>
				</ListGroupItem>

				<Modal 
					show={this.state.showModal} 
					onHide={(e) => this.closeMe(e)}
				>
					<TaskModal 
						task={this.props.task}
						milestone={this.props.milestone}
						user={this.props.user}
						onClose={this.closeMe}
					/>
				</Modal>
			</div>
	  );
	}
}

ListItem.propTypes = {
	task: PropTypes.object,
	milestone: PropTypes.string,
	user: PropTypes.object,
};

ListItem.defaultProps = {
	task: {},
	milestone: '',
	user: {},
};

export default ListItem;