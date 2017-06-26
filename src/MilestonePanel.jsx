import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

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
  	const title = (
  	  <h3>title?</h3>
  	);

  	
  	return(
		  <div>
		    <Panel header="Panel heading without title" collapsible>
		      Panel content
		    </Panel>
		    <Panel header={title} collapsible>
		      Panel content
		    </Panel>
		  </div>
	  );
	}
}

export default MilestonePanel;