import React, { Component } from 'react';

let style = {
  boxSizing: 'border-box'
};

let width = {
  width: '50%'
};

const List = (props) => (
  <ul className="siimple-list" style={style}>
    {props.datas.map((data, i) => {
      return <li key={i} className="siimple-list-item siimple-list--hover siimple--bg-success siimple--color-white">{data.title}</li>
    })}
  </ul>
);

export default List;