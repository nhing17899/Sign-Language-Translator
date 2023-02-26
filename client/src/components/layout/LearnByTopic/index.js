import React from 'react';
import { Link } from 'react-router-dom';

const LearnByTopic = ({ topics }) => {
  return (
    <div className='list-container'>
      <span className="list-title">Learning Topics</span>
      <div className={topics.length > 5 ? 'double-list' : ''}>
        {topics.map((topic) => (
          <Link to={'/' + topic}>
            <div className='list-item' key={topic}>{topic}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LearnByTopic;