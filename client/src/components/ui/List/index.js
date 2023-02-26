import React from 'react';
import './List.css';

const List = ({title, items}) => {
  return (
    <div className='list-container'>
      <span className="list-title">{title}</span>
      <div className={items.length > 5 ? 'double-list' : ''}>
        {items.map((item) => (
          <div className='list-item' key={item}>{item}</div>
        ))}
      </div>
    </div>
  )
}

export default List; 