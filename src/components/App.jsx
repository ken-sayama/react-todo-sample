import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    // stateの配列に代入を行う
    this.state.todo.push({title: e.target.title.value});
    // 追加された配列をsetStateで上書きする
    this.setState({todo: this.state.todo});
    // inputのvalueを空に
    e.target.title.value = '';
  }

  render() {
    return (
      <div id="wrapper">
        <div className="siimple-box siimple--bg-dark siimple--color-white">
          <h1 className="siimple-box-title">React Todo App</h1>
          <Form onSubmit={this.handleSubmit}/>
          <div className="siimple-rule"></div>
          <List datas={this.state.todo}/>
        </div>
      </div>
    );
  }
}

export default App;
