import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const data = [
  {
    task: 'Study',
    id: 123,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  addTodo = task => {
    
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleCompleted = id => {
  
    this.setState({
      todos: this.state.todos.map(todos => {
        if (todos.id === id) {
          return {
            ...todos,
            completed: !todos.completed
          };
        } else {
          return todos;
        }
      })
    });
  };  

  clearCompleted = ()  => {
      
    this.setState({
      todos: this.state.todos.filter(todos => {
        return !todos.completed 
      })
    });
  };  

    // .map, .filter, .reduce, .forEach
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}
        />
        <TodoList 
        toggleCompleted={this.toggleCompleted}
        todos={this.state.todos}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
