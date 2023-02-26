import React from 'react';
import './TopicPage.css';

const TopicPage = ({topic}) => {

  return (
    <div className='topic-container'>
      {topic.map(word => (
        <div className='topic-word'>
          <img src={word.image} alt=''/>
          <div>{word.text}</div>
        </div>
      ))}
    </div>
  )
}

export default TopicPage;