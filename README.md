# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Learning Objectives

Describe and utilize the classic React gotchas:
Styles: using className to set styles versus style = {{ background: 'magenta' }}
Images: importing images versus putting assets in the public directory
The need for fragments and returning single children from component render methods"
Use Netlify to deploy a React app
Use attributes in parent components to pass data down to child components as props
Use {} as "portals" in the render method to do JavaScript inside our HTML
Use .map to iterate over an array and render new elements for each item in an array.
Use jsx to product & render a React component
Description
Welcome to the Alchemy Farm! For this deliverable, you will practice creating functional components, mapping through lists and rendering a component for each item.

✅ There is a list of animals provided for you in data.js, 
✅ as well as an empty <Main /> component 
✅ and an empty <Animal /> component. 
You need to add the code to display the animals by mapping through the list provided 
and rendering an <Animal /> component for each animal. 

The final product should look like this: 

Acceptance Criteria
✅ <Main /> should import background.png and set it as a background image on the <main> element

<Main /> component should use a .map to loop through and render an <Animal /> component for each animal listed in data.js
Animals should be positioned dynamically using the style attribute in JSX and props
should utlize the existing classes in Animal.css
App should be deployed on Netlify
Rubric
Task	Points
Main branch deployed to Netlify	1
Open PR from dev branch with Netlify deploy preview	1
Uses a .map to render <Animal /> component for each animal in data.js	8
Properly uses props in <Animal />	4
Dynamically sets the style attribute in JSX to position the animals	4
Utilizes existing classes to properly display animals	2
Image Attribution
Backgrounf Image by OpenClipart-Vectors from Pixabay