- [ ] Why would you use class component over function components (removing hooks from the question)?

A lot of people &/or companies have legacy code maintained with class components so it would be good to know how to build them in case you find yourself working with them.

- [ ] Name three lifecycle methods and their purposes.

1) render: Rendering does all the work (in fact it's required for a class component to work). It returns the JSX of your actual component.
2) componentDidMount: Part of the mounting phase in the React Lifecycle & gets called as soon as the render method is called the first time. Inside of componentDidMount we can call setState which forces a re-render of our component. Any asynchronous actions should be performed inside of our componentDidMount function, especially when it comes to fetching data via HTTP which is it's biggest purpose.
3) componentWillUnmount: Before a component goes away, it asks for final requests where ou can cancel any outgoing network requests, or remove all event listeners associated with the component. It basically cleans up the component.

- [ ] What is the purpose of a custom hook?

By building a custom hook, we skip writing all of the stateful logic for our non-visual behavior & can produce "DRY" code that is easy to use & be imported anywhere in our App.

- [ ] Why is it important to test our apps?

It helps us to catch & fix bugs or errors before they occur with our users so we can confidently ship our Apps into production & provide a better user experience for anyone who uses them. 