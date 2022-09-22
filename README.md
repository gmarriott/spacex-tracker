This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Design and development thoughts (For Andy and Sam)

Running the app:

Initially `npm i` will need to be ran in order to download and install dependencies for the project

Once the packages are installed use `npm start` to boot up the app

Notes on the development process I used for the development of the SpaceX tracker

Beginning the process I knew I'd like to challenge myself and develop the task in a JS framework, I had been using Vue and Bootstrap at my previous workplace so I decided to mix it up and try and create the application using React and Tailwind.

Firstly I decided to use the helper package create-react-app, this allows me to quickly spin up some boilerplate code which compiles and gives me the skeleton for the project. I have used particles js in the past and noticed there was a React version so I decided to install this as I thought it would make a nice looking background for the app (at the cost of some performance :sadface:). I was able to apply my particles background and import the spacex logo and have some sub-text displayed.

The next step was calling the spacex api so that I could pull in the data for the launches. To do this I utilized axios and used the built in GET method to call the url. I applied this in the useEffect method in the top level of the application (App.js) this allowed me to set the state of my launch data. Once I had set the launch data as part of the state, I wanted to create a sub component to render the information from the request.

The sub component I made was LaunchInformation.js, which was basically a list item for each launch entry. The top level mapped through the request data we recieved and basically passed the prop for each entry down to my newly created sub component. Within LaunchInformation.js I had to do some methods for catching if any of the information was null, for example with the image if none was availble from the flickr property I would fall back to use the patch, then if this was still null, use a default image in my assets folder. I created a few of these methods for falling back when data was missing but was able to produce a cards with mostly decent information displayed.

In the last steps, I ran lighthouse in my Chrome browser and tweaked some colours I had used to make sure accessiblity was as high as I could get it. I altered the very simple test which was included when the boilerplate code was generated to pass with my correct sub text displayed.

If I was to make further changes I would like to include a search input which would filter by name and then improve the look of the images.



