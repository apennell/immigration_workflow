# H1-B Transfer Workflow

By [Annie Pennell](https://www.linkedin.com/in/anniepennell/)

[anniepennell.com](http://anniepennell.com/)

H1-B Transfer Workflow displays the workflow of all the tasks required to complete the H1-B transfer process for a user of Bridge US. The workflow is made up of 6 milestones, each of which have tasks that must be completed. Each task has an "owner" who is responsible for executing it, as well as other data included in the JSON file. 

The goal was to present the tasks in a way that is easy for all users of the platform--admins on Bridge US's Client Services team, attorneys partnering to help the client, the foreign national benefitting from the process, and HR (the clients)--to check an application status and efficiently see what needs to be done. 

It follows the principles of flat design to allow for straight-forward navigation and focus on the information. The initial view is an overview of the workflow, simply displaying the titles of the 6 milestones and how many tasks have been completed and are left for each one. This gives the user a quick idea of how far along the process is without being overloaded with information. Clicking on an individual milestone expands to display all of its tasks, along with the owner of each and whether or not it's completed. Clicking on a task pulls up a modal that displays more information about the task. If the user wants to view all the tasks at once, they can click the "Show all" button, then click it again to collapse them all.


## Technologies 

This app uses ReactJS, HTML, CSS, Sass, Javascript, jQuery, JSON, [Create React App](https://github.com/facebookincubator/create-react-app), and [React-Bootstrap](https://react-bootstrap.github.io/).


## Dependencies

* Node >= 6 on your machine--you can use [nvm](https://github.com/creationix/nvm) to easily switch Node versions between different projects.


## Instructions

1. Clone locally using `git clone https://github.com/apennell/immigration_workflow.git`.
2. `cd` into `immigration_workflow` directory.
3. Run `npm install` to install the project's dependencies.
4. Run `npm start` to run the app in the development mode.
5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
6. To build the app for production and bundle to optimize for best performance, run `npm run build`.


