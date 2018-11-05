import React, { Component } from 'react';

const Form = (props) => (
  <form className="siimple-form">
    <label className="siimple-label siimple--color-white">Your todo: </label>
    <input type="text" className="siimple-input siimple--bg-white" placeholder="your todo write here" />
  </form>
);

export default Form;