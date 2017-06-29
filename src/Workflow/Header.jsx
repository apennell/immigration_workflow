import React, { Component } from 'react';
import workflowData from '../H-1B_tasks.json';
import './Workflow.css';

const Header = () => {
	return(
		<div className="header-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<img 
							src={workflowData.user.profile_pic} 
							className="header-img" 
							alt="user-pic"
						/>
						<div className="header-text">
							<h1 className="header-name">{workflowData.user.full_name}'s H1-B Transfer</h1>
							<h3 className="header-company">{workflowData.user.company}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;