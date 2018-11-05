import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    console.log(e.target.todo.value);
    e.preventDefault();
    this.state.todo.push({todo: e.target.todo.values});
    this.setState({todo: e.target.todo.value});
  }

  render() {
    return (
      <div className="siimple-box siimple-box--orange">
        <h1 className="siimple-box-title">React Todo App</h1>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

export default App;
