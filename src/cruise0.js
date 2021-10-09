import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }
  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  
  addTodo = () => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos, name]
    });
  }
  removeTodo = (index) => {
    // eslint-disable-next-line
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    });
  }
  render() {
    const { todos } = this.state;
    return (<div align="center">
      <h2>Cruise0</h2>
      <p>Please input text which you want to list</p>
      <input type="text" onInput={this.onInput} />
      <button onClick={this.addTodo} >✔︎</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>
          {todo}
          <button onClick={() => { this.removeTodo(index) }}>✖️</button>
        </li>)}
      </ul>
    </div>);
  }
}
