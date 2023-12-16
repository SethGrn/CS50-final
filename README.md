# CS50-final (GigaNote)
#### Video Demo: https://www.loom.com/share/16c5104010b34e81b595b0bf83c1ed69
#### Description:
GigaNote is a web app created in React that allows the user to create and manage a list of notes.
I used Bootstrap for styling to easily make the page look aesthetic while being able to focus on writing the Javascript for the website.
I've recently been learning React in a course I am currently taking so I wanted to use the skills I've gotten up till now to create something that isn't super difficult, since I don't have much time because of this other class, but is also just on the edge of my abilities. I learned some new things while working on this which is great!
With this web app you can create simple notes just like in EverNote, these are stored in a state variable until the user closes the Window.

App.js is where all the components are called, and most of the state is managed,
Header.js contains the bootstrap styling for the banner of the page "Welcome to GigaNote"
index.js is simply a file provided by React to call the App.js component
NotePreview.js contains the code and styling for the sidebar that contains the titles of notes and a clickable link to open that note
NoteView.js contains the text fields and delete button when you open a note, allowing you to type in to either the title or body fields or delete the note. Most importantly it handles all the updates to the note data with its own state and state passed down from the parent component (App.js)
Sidebar.js calls NotePreview, and contains the bootstrap styling that makes the sideabar work

Thanks for an awesome course!











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
