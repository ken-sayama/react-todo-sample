import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };

  handleSubmit(e){
    console.log(e.target.todo.value);
    e.preventDefault();
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
