# Poch'lib
Application to allow you to search for books online, then to pick them up at the bookstore **La Plume enchantée**



## Configuration
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

So you will need NodeJS, React and Yarn installed in order to run this app

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

An excellent OpenClassRoom's tutorial for beginners :
[Démarrez-facilement-avec-create-react-app](https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664801-demarrez-facilement-avec-create-react-app)


[Yarn installation](https://classic.yarnpkg.com/fr/docs/install)


**You will also need an .env file at project's root to specify your Google API key var**
`REACT_APP_GOOGLE_API_KEY='abcdefghijklmnop'`

If you don't have already one : [https://developers.google.com/books/docs/v1/using#APIKey](https://developers.google.com/books/docs/v1/using#APIKey)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

You can then serve your app build using 'serve'

```
yarn global add serve

serve -s build
```

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

You can adjust listening port :
```
serve -s build -l 4000
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

[Code splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

[Analyzing the bundle size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

[Making a progressive web app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

[Advanced configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

[Deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

[npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
