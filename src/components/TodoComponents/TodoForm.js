import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
         
        this.state = {
          newTodo: ''
          
        };
    }    

    handleChanges = event => {
        this.setState({
          newTodo: event.target.value
        });
      };


      handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
      };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">New To Do Item</label>
        <input
          type="text"
          name="item"
          id="item"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;