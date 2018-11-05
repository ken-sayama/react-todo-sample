import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
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
