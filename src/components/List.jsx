import React from 'react';

let style = {
  boxSizing: 'border-box'
};

const List = (props) => (
  <ul className="siimple-list" style={style}>
    {props.datas.map((data, i) => {
      return <li key={i} className="siimple-list-item siimple-list--hover siimple--bg-primary siimple--color-white">{data.title} <button onClick={() => props.handleRemove(i)}>削除</button></li>
    })}
  </ul>
);

export default List;