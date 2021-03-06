import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import './Workflow.css';

class TaskModal extends React.Component {

  render() {
  	return(
  		<div>
  			<i 
  				className="btn-close-x fa fa-close fa-2x" 
  				onClick={this.props.onClose} 
  				type="button"
  			/>

  			<Modal.Header>
  				<Modal.Title>
	  				{this.props.milestone}
	  				{this.props.task.completed ?
      				<i className="fa fa-check-circle-o fa-2x pull-right" />
		      	:
		      		<i className="fa fa-circle-o fa-2x pull-right" />
		      	}
  				</Modal.Title>
  			</Modal.Header>
		    <Modal.Body>
		    	<div className="top-content">
			      <h3>{this.props.task.name}</h3>
			      <p>Due: {this.props.task.due_date}</p>
		      </div>

		      {this.props.task.owner ? 
		      	<div className="lower-content">
			      	<p className="owner-name">{this.props.task.owner.first_name} {this.props.task.owner.last_name}, {this.props.task.owner_type}</p>
			      	<p>{this.props.task.owner.email}</p>
		      	</div>
		      :
			      <div className="lower-content">
			      	<p className="owner-name">{this.props.user.full_name}, User</p>
			      	<p>{this.props.user.email}</p>
		      	</div>
		      }
		    </Modal.Body>
  		</div>
	  );
	}
}

TaskModal.propTypes = {
	task: PropTypes.object,
	milestone: PropTypes.string,
	onClose: PropTypes.func,
	user: PropTypes.object,
};

TaskModal.defaultProps = {
	task: {},
	milestone: '',
	onClose: function() {},
	user: {},
};

export default TaskModal;