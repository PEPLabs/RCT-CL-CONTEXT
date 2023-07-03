import React from 'react';
import './App.css';
import DemoContextProviderComponent from './components/demo/demo-context-provider-component';
import TodoContextProviderComponent from './components/todo/todo-context-provider-component';

function App() {
  return (
    <div className="App">
      <h2>Context in React</h2>
      <p>In fully feature front-end applications, it can be a nightmare to keep track of the state of your application accross a large number of components. Imagine a parent component
        that passes data to 10 children components for a variety of calculations, and those children components create 3 grandchildren each for further caluclations; each component needs
        to keep track of the  most up to date version of the state so they their calculations aren't based on old data, right? Think about how messy that it would be to keep all that data
        in sync using the concept of props alone. 
      </p>
      <p>Luckily, we have another tool in React that can help us keep data in sync accross many component. This tool is called "Context".</p>
      <p>In this lab we'll explore context; both providing/creating context and consuming/using that context.</p>


      <div className="section-container">
        <DemoContextProviderComponent></DemoContextProviderComponent>
      </div>
      <div className="todo-container">
        <TodoContextProviderComponent></TodoContextProviderComponent>
      </div>

      <div>
        <a href="https://react.dev/learn/passing-data-deeply-with-context">https://react.dev/learn/passing-data-deeply-with-context</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try using context to pass and sync data between grandchildren*/}
    </div>
  );
}

export default App;
