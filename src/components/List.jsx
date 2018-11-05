import React, { Component } from 'react';

let style = {
  boxSizing: 'border-box'
};

const List = (props) => (
  <ul className="siimple-list" style={style}>
    <li className="siimple-list-item siimple-list--hover siimple--bg-success siimple--color-white">Item 1</li>
    <li className="siimple-list-item siimple-list--hover siimple--bg-success siimple--color-white">Item 2</li>
    <li className="siimple-list-item siimple-list--hover siimple--bg-success siimple--color-white">Item 3</li>
  </ul>
);

export default List;