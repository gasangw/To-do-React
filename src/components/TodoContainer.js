import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  handleDeleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  }

  handleAddTodo = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...todos, newTodo],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <h1 className="head">to-do</h1>
          <InputTodo
            handleAddTodo={this.handleAddTodo}
          />
          <TodosList
            todos={todos}
            handleChange={this.handleChange}
            handleDeleteTodo={this.handleDeleteTodo}
          />
        </div>
      </div>
    );
  }
}
