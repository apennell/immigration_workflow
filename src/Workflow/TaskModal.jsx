import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Workflow.css';

class TaskModal extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
  	return(
  		<div>
		    <Modal.Body>
		      <h4>Text in a modal</h4>
		      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
		      <Button onClick={this.props.onClose}>Close</Button>

		    </Modal.Body>
  		</div>
	  );
	}
}

export default TaskModal;