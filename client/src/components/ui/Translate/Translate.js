import React, { useState } from 'react';
import './Translate.css';

const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTranslate = () => {

  };

  return (
    <div className="translate">
      <div className='input-area'>
        <textarea
          className='text-area'
          placeholder="Enter text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <button onClick={handleTranslate}>Translate</button>
      </div>
      <div className="output-area">
        {outputText ? (
          <p>{outputText}</p>
        ) : (
          <p>Translation</p>
        )}
      </div>
    </div>
  )
}

export default Translate;