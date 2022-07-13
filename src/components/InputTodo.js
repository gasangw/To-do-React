import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0) {
      handleAddTodo(title);
      setTitle('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Enter a title');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" placeholder="Add Todo" value={title} onChange={handleOnChange} className="input-text" />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

InputTodo.defaultProps = {
  handleAddTodo: PropTypes.func,
};

InputTodo.propTypes = {
  handleAddTodo: PropTypes.func,
};

export default InputTodo;
