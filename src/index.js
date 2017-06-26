import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import workflowData from '../src/H-1B_tasks.json';

ReactDOM.render(
	<App workflowData={workflowData} />, 
	document.getElementById('root')
);
registerServiceWorker();
