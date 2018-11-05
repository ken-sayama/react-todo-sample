import React from 'react';

const Form = (props) => (
  <form className="siimple-form" onSubmit={props.onSubmit}>
    <div>
      <label className="siimple-label siimple--color-white">Your todo: </label>
      <input name="title" type="text" className="siimple-input siimple--bg-white" placeholder="your todo write here" />　　<input type="submit" value="Add" className="siimple-btn siimple-btn--grey"/>
    </div>
  </form>
);

export default Form;