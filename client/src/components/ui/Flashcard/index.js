import React, { useState } from 'react';
import './Flashcard.css';
import { BsArrowRightSquare, BsArrowLeftSquare } from 'react-icons/bs';

const Flashcard = ({ title, cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlip, setIsFlip] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % cards.length);
    setIsFlip(false);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => prev === 0 ? cards.length - 1 : prev - 1);
    setIsFlip(false);
  };

  const handleFlipCard = () => {
    setIsFlip(prev => !prev);
  };

  return (
    <div className="flashcard">
      <h2>{title}</h2>
      <div className="card-container">
        <div className="card">
          <img 
            src={cards[currentCardIndex].imageUrl} 
            alt='flashcard'
            onClick={handleFlipCard} 
            style={{ maxWidth: '100%', maxHeight: '100%', display: isFlip ? 'none' : 'block'}}
          />
          <div 
            className={'flashcard-text'}
            onClick={handleFlipCard}
            style={{display: isFlip ? 'flex' : 'none'}}
          >
            {cards[currentCardIndex].text}
          </div>
        </div>

        <div className='arrows'>
          <button onClick={handlePrevCard}><BsArrowLeftSquare /></button>
          <button onClick={handleNextCard}><BsArrowRightSquare /></button>
        </div>
      </div>
    </div>
  )
}

export default Flashcard;