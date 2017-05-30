## v1.0 
1. Set up server with an api endpoint to recipes - /api/recipes
2. Set up front end with React
3. Build a simple log in component with form validation
4. Build components to render the recipes, ingredients, and nutritional data
5. Add a favorite feature where recipes can be favorited or unfavorited
6. Add a rating feature where each recipe can be rated

## v1.1
1. Add unit tests and a Snapshot test with Jest
2. Server side render initial page

----------------------------

The goal of this challenge is to build a recipe review area using the recipe data provided. It should be built using HTML5, CSS3, and a JS framework or vanilla JS. It should have two pages but I'll explain why I had combined it into one for now. 

These are the main challenges
- [Styling](#styling)
- [Login](#login-page)
- [Recipe review page](#recipe-review-page)
- [Node server with endpoints](#node-server-with-endpoints)
- [Task automation with npm scripts](#task-automation-with-npm-scripts)
- [The next version](#the-next-version)

#### Styling

Flexbox is awesome and I used it all over the place to design my card-based user interface. I also used the Font Awesome Icon library because icons provide easily recognizable symbols, which helps free up space on the page. The design choices that I made followed a few simple rules. On mobile devices, use one column. On tablets and larger screens, use two columns. Use margins and paddings to give breathing room between elements. Keep the design clean and simple. This meant using two colors, light blue and the Hello Fresh green (a variable in my SCSS file), to compliment grey text. The drop shadows were used as mixins to give a subtle depth to the recipe cards, images, and modal. 

My process with styling was to layout a few basic styles then test any new styles with Chrome's DevTools, using on the toggle device toolbar to apply styles on different devices. I also used the iOS Simulator from xCode just to be sure that the styles held true on mobile. 

Finally, I build a Sass compiler and watcher as part of the task automation process. CSS and SCSS files are bundled in the build script with Webpack, improving latency because there's one network request. In reality, with one css file, it’s not a huge deal but this optimization didn't require much work so it was worth it. 

#### Login

I implemented a simple validation to check a users email. I decided to place the email and password inputs at the top right corner of the main recipe page instead of a separate page. The advantage would be saving the user one less click to log-in. In a real app, we may have some OAuth log-in methods where having a separage page or modal window would be necessary. 

There's no existing database to check if an actual email exists but on the front end, we can verify that the input is actually an email address. The two simple things to check are the ‘@’ symbol and an email suffix. For this, I captured the user input and tested it against the regex using .test() method and the ‘@’ symbol using the native JS string method .includes(). The state that needed to be tracked were visitor email & password, success or failed validation messages, and a boolean that determines validation. 

If the email passes the validation conditions, a green success message appears. If the email didn’t pass the conditions, a red (and in bold) failed message appears. Both messages are removed on a setTimeout of 2000ms. 

#### Recipe review page

This component is the big kahuna. It's where most of the features and nuances live. 

Rating a recipe. A star is either filled or empty. The default state is empty because the user has not rated the recipe yet. The idea here is to allow users to rate a recipe by hovering over them then clicking the amount of stars they want to give the recipe. There are three important events at play. Hovering over the stars visually suggests the rating, hover off the stars removes that visual representation, while clicking the star records the rating. The tricky part to this component was to keep track of state that corresponds to mouseOver, mouseOut, and onClick events. 

I used unique id that is associated with each star. On mouseOver, that star and all stars with a lower id value will be filled. On mouseOut, all stars are reset to empty. When a star is clicked, I apply the same logic as mouseOver. The difference being that the star stays filled until another click triggers a change. 

Allow a user to favorite a recipe. I used the font awesome heart icon and wrote a function to toggle the class on the icon. There are a few values to keep track of. The index value of the recipe so when the toggle is triggered, it toggles only that recipe and not all of the hearts on the page. On user click, the class name of the Font Awesome icon — fa fa-heart — is concatenated with the red or black class, which is styled in CSS. On the next click, I check if the heart is black in which I'll then turn it red and vice versa. Black and red hearts only. It’s a brooding recipe review :\

Ingredients on modals. Ingredients are important for a recipe review site right? Screen real estate is too so I needed to find the right balance in displaying all of the information but not overloading the user with too much information at once. I’m only using one page so I created modals to show a list of ingredients. The challenge here was handling the open modal event on the parent component, which renders the child component, and handling the close modal event on the child component. The issue that I ran into was that when the modal was open, the ingredients were passed down as props, but the ingredients of the very last recipe was sent every time. In order to send down the correct ingredients that the user expects, I saved the index value of the specific recipe to state, then passed down the ingredients based on that index value.

#### Node server with endpoints

I set up an Express/Node server using Express Generator to allow me to create an API endpoint for the recipe data. Express Generator saves me about 30 minutes of set up time by providing basic server side code. I used the Superagent HTTP request library in React to get data from the server onto the client. Superagent is a lightweight request library (that supports Promises as well) and their docs are easy to understand.

#### Task automation with npm scripts

With npm, running tasks is easy through the scripts command. The tasks that I’m using are compiling SASS to CSS, transpiling ES6 code, bundling files with Webpack, and starting the server. I used an npm package called concurrently to run all of these tasks, well, concurrently! Running commands concurrently through through npm scripts is possible too but I found that when one command wasn’t working, the others would still run and there wasn't a clear way of knowing if a script failed.

The original Webpack build file was 1.06mb (big) but after installing the UglifyJS plugin, the build file was reduced to 281kb — about 75%! 

Jest caches transformed module files to speed up test execution. The cache option in the npm test script is set to true. I've changed it to --no-cache because the transform script was changed and the changes weren't being recognized by Jest.

#### The next version
I had a lot of fun working on this project but there's still more to do. In the next version, I'd like to utilize React Router for client side routes, build a log-in page with OAuth, a slide in panel for log-in on mobile, and a carousel for the recipes so users don't need to scroll. 
