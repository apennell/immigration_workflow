# H1-B Transfer Workflow

By [Annie Pennell](https://www.linkedin.com/in/anniepennell/)

[anniepennell.com](http://anniepennell.com/)



## Technologies 

This app uses ReactJS, HTML, CSS, Sass, Javascript, jQuery, JSON, and React-Bootstrap.

## Dependencies

* Node >= 6 on your machine--you can use [nvm](https://github.com/creationix/nvm) to easily switch Node versions between different projects.

## Instructions

1. Clone locally using `git clone https://github.com/apennell/immigration_workflow.git`

2. Run `npm start` to run the app in the development mode. This also 
    
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.



### Create React App
This app's skeleton was bootstrapped with **[Create React App](https://github.com/facebookincubator/create-react-app)**. The following is some information from Create React App's README about how to perform common tasks.<br>
You can find the most recent version of the full guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

#### Updating to New Releases

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.


#### Folder Structure

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.



