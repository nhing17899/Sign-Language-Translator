import React from 'react';
import Translate from '../../ui/Translate/Translate';
import TopicPage from '../TopicPage';
import './Dictionary.css';

const Dictionary = () => {

  // const topic=[
  //   word1: {
  //     text: "A round fruit with red, green, or yellow skin and a white inside",
  //     image: "https://www.fruits.com/wp-content/uploads/2021/01/apples.jpg"
  //   },
  //   word2: {
  //     text: "A long curved fruit with yellow skin and soft white flesh",
  //     image: "https://www.fruits.com/wp-content/uploads/2021/01/bananas.jpg"
  //   },
  //   word3: {
  //     text: "A round citrus fruit with a thick, textured skin and segmented juicy interior",
  //     image: "https://www.fruits.com/wp-content/uploads/2021/01/oranges.jpg"
  //   },word2: {
  //     text: "A long curved fruit with yellow skin and soft white flesh",
  //     image: "https://www.fruits.com/wp-content/uploads/2021/01/bananas.jpg"
  //   },
  // ]

  return (
    <div className='dictionary'> 
      {/* <span>What do you want to know today?</span>
      <div className="search-area">
        <input className="search-input" type="text" placeholder="Search..." />
      </div>
      <span className='hot-search'>Hot Search</span>
      <div className="picture-grid">
        <div className="image">1</div>
        <div className="image">1</div>
        <div className="image">1</div>
        <div className="image">1</div>
      </div> */}


      <Translate/>
      {/* <TopicPage topic={topic}/> */}
    </div>
  )
}

export default Dictionary;