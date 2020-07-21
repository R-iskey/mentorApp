# Mentoring app

### Overview
Hi there, 🖖  
Thank you for the task, I hope you'll be satisfied with the result.  
This task took me about 12 hours.  
Also, I had some thoughts about unit testing but sadly I couldn't find the time for it.

### Client-side vs Server-side
Client-side and server-side(aka SSR) approaches have similar cons and pros, but for this project, I decided to use the client-side approach, because: 
1. We don't have a problem with "SEO", because this is an administration dashboard.
2. SSR can improve performance if your application is small. But it can also degrade performance if it is heavy.
3. In SSR, the application performance depends on the server’s resources and user’s network speed.

But mostly I like *isomorphic* approach, [see here](https://www.baeldung.com/react-nashorn-isomorphic-app).

### Librabries
- React - 16.x.x
- [Redux-Toolkit](https://redux-toolkit.js.org/) - this is an official redux toolset for efficient Redux development, with Typescript support, which includes other libraries such a `redux-thunk`, `reselect`
- [React-router](https://reactrouter.com/web/guides/quick-start) - as a routing framework, this also supports server-side routing
- [Ant-design](https://ant.design/docs/react/introduce) - as UI Framework
- [Axios](https://github.com/axios/axios) - as a Promise based HTTP client 
                                              

### Why I choose Redux as a state management paradigm?
In our days we've some favorite options for react state management, there is`
- Redux 
- Mobx
- React Global Hook

During my experience as a Front-end developer, I released the applications and work on big projects with both of them and I collected some thoughts about the cons and pros

Mobx is very simple in learning and use, that doesn't have that many rules such a Redux has. Mobx also likes the OOP approach and use an Observable pattern, which gives you freedom in state management.  

On the other hand, Redux allows you to reason about your application state even though it is on a larger scale. 
**Redux comes with more boilerplate as MobX because it was added for specific design constraints**
In MobX one wraps the objects and arrays into observable objects which hide most of the boilerplate. It builds upon hidden abstractions.
In Redux it is easier to reason about it with plain JavaScript. It makes it easier for testing and easier for debugging your application.

Overall Mobx/React Global Hook is my favorite when I want to write a small application and  Redux with his official toolkit [Redux-Toolkit](https://redux-toolkit.js.org/)  the best fit for the big and scalable systems.

### Why I chose Ant design as UI Framework

First of all, I want to say that is a hard decision to select a correct UI framework without enough specifications. Selecting the correct UI Framework depends on UI Team preferences and application requirements. Anyway, I'll try to explain why I chose UI Framework and why Ant-design.
I started to look for UI Framework because otherwise I'll spend more time to write some basic stuff and it's not a good idea for this simple task :) 
If I'll have some specifications or designs, maybe I'll choose to write custom one.

So, I found the [list](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/) of top React UI frameworks. I had experience with some of them before, e.g Ant-design, Material-UI, Blueprint, Carbon Components, React bootstrap, Semantic UI.
I can write down about some differences between these frameworks, but it'll take too long, so I mentioned about the pros of using `Ant-design`.

1. Ant-design provides high-quality components for rich, interactive user interfaces.
2. This is Typescript friendly
3. This not use the css-in-js approach, which may look confusing for backend developers.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### References
- UI Lib list - [https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)
- Redux vs Mobx - [https://www.robinwieruch.de/redux-mobx](https://www.robinwieruch.de/redux-mobx)
- Isomorphic approach - [https://www.baeldung.com/react-nashorn-isomorphic-app](https://www.baeldung.com/react-nashorn-isomorphic-app)
- SSR and Client-side rendering - [https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/](https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/)
