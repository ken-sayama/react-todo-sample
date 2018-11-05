import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="siimple-box siimple-box--orange">
        <h1 className="siimple-box-title">React Todo App</h1>
        <Form/>
      </div>
    );
  }
}

export default App;
