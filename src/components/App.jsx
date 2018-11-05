import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
        {title: 'タイトル'}
      ]
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
      <div id="wrapper">
        <div className="siimple-box siimple--bg-dark siimple--color-white">
          <h1 className="siimple-box-title">React Todo App</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}/>
          <List datas={this.state.todo}/>
        </div>
      </div>
    );
  }
}

export default App;
