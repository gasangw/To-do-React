import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChange, handleDeleteTodo }) => (
  <div>
    <ul className="list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  </div>
);

TodosList.defaultProps = {
  todos: [],
  handleChange: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string,
    }),
  ),
  handleChange: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
};

export default TodosList;
