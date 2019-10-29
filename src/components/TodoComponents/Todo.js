import React from 'react';

const Todo = props => {
  return (
    <div>
      <p>{props.todos.task}</p>
    </div>
  );
};

export default Todo;