import React from 'react';
import './List.css';

const List = ({title, items}) => {
  return (
    <div className='list-container'>
      <span className="list-title">{title}</span>
      <ul>
        {items.map((item) => (
          <li key={item}>__ {item}</li>
        ))}
      </ul>
    </div>
  )
}

export default List;