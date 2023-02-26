import React from 'react';
import List from '../ui/List';
import Slider from '../ui/Slider/Slider';
import './Learning.css';
import Flashcard from '../ui/Flashcard';

const Learning = () => {
  const imageUrl = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU",
    "https://www.citypng.com/public/uploads/preview/hd-pikachu-super-mario-cartoon-character-png-11661278318xmj9ynzunx.png",
    "https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg",
    "https://e7.pngegg.com/pngimages/476/159/png-clipart-pokemon-pikachu-pikachu-pokemon-games-pokemon-thumbnail.png",
    "https://i.etsystatic.com/30441432/r/il/f6e2a4/3533454704/il_1080xN.3533454704_mcuw.jpg",
    "https://www.pngfind.com/pngs/m/495-4950739_pokemon-cartoon-png-pokemon-pikachu-png-transparent-png.png"
  ];

  return (
    <div className='learning'>
      <div className='learning-section'>
        <List title="Learn By Topic" items={['Text 1', 'Text 2', 'Text 3', 'Text 4']} />
        <div className='topic-right'>
          <h3 id='see-more'>{'>'} See More</h3>
          <div className='learning-section'>
            <Slider
              title="Slides"
              imagesUrl={imageUrl}
            />
            <Slider
              title="Slides"
              imagesUrl={imageUrl}
            />
          </div>
        </div>
      </div>

      <div className='learning-section flashcards'>
        <div className='topic-right'>
        <Flashcard
          title=""
          cards={[
            {
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU',
              text: 'This is the back of card 1.'
            },
            {
              imageUrl: 'https://www.citypng.com/public/uploads/preview/hd-pikachu-super-mario-cartoon-character-png-11661278318xmj9ynzunx.png',
              text: 'This is the back of card 2.'
            },
            {
              imageUrl: 'https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg',
              text: 'This is the back of card 3.'
            }
          ]}
        />
        </div>
        <List title="Flashcards" items={['Text 1', 'Text 2', 'Text 3', 'Text 4']} />
      </div> 

      <div className='learning-section'>
        <List title="Test now!" items={['Text 1', 'Text 2', 'Text 3', 'Text 4']} />
        <div className='learning-section'>
            <Slider
              title="Slides"
              imagesUrl={imageUrl}
            />
            <Slider
              title="Slides"
              imagesUrl={imageUrl}
            />
          </div>
      </div>
    </div>
  )
}

export default Learning;