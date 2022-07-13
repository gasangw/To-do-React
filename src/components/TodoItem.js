import React from 'react';
import PropTypes from 'prop-types';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const TodoItem = ({ todo, handleChange, handleDeleteTodo }) => (
  <div className="list-inner-container">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => handleChange(todo.id)}
      className="input-checked"
    />
    <li className="list-item"><span style={todo.completed ? completedStyle : null}>{todo.title}</span></li>
    <button type="button" onClick={() => handleDeleteTodo(todo.id)} className="btn-delete">Delete</button>
  </div>
);

TodoItem.defaultProps = {
  todo: {},
  handleChange: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
};

export default TodoItem;
