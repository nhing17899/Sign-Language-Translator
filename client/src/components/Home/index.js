import React from 'react';
import './Home.css';
import { BsArrowRight } from 'react-icons/bs';
import Slider from '../Slider';
import Image from '../Image';

export default function HomePage(props) {
    const imageUrl = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU",
        "https://www.citypng.com/public/uploads/preview/hd-pikachu-super-mario-cartoon-character-png-11661278318xmj9ynzunx.png",
        "https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg",
        "https://e7.pngegg.com/pngimages/476/159/png-clipart-pokemon-pikachu-pikachu-pokemon-games-pokemon-thumbnail.png",
        "https://i.etsystatic.com/30441432/r/il/f6e2a4/3533454704/il_1080xN.3533454704_mcuw.jpg",
        "https://www.pngfind.com/pngs/m/495-4950739_pokemon-cartoon-png-pokemon-pikachu-png-transparent-png.png"
    ];

    return (
        <div className='home-page'>
            <div className="mission-statement">
                <h2>Mission Statement</h2>
            </div>

            <div className="topics">
                <span className='blue-text'>Various Topics</span>
                <div className="pictures">
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU"
                        caption="Image 1"
                    />
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU"
                        caption="Image 1"
                    />
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU"
                        caption="Image 1"
                    />
                </div> 
            </div>

            <div className="topics">
                <span className='blue-text'>Better Tested</span>
                <div className="pictures">
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU"
                        caption="Image 1"
                    />
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU"
                        caption="Image 1"
                    />
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU"
                        caption="Image 1"
                    />
                </div>
            </div>
            
            <div className="stats">
                <div>
                    <p>Users</p>
                    <p>100K+</p>
                </div>
                <div>
                    <p>Topics</p>
                    <p>200+</p>
                </div>
                <div>
                    <p>Rating</p>
                    <p>4.5/5</p>
                </div>
            </div>

            <div>
                <span className='blue-text'>Common Signs</span>
                <Slider
                    title="Slides"
                    imagesUrl={imageUrl}
                    numDisplay={3}
                />
            </div>

            <div className="lets-start">
                <span className='blue-text'>Let's Get Started!</span>
                <div className="sections">
                    <div className="section">
                        <BsArrowRight />
                        <span>Choose topic</span>
                    </div>
                    <div className="section">
                        <BsArrowRight />
                        <span>Test yourself</span>
                    </div>
                    <div className="section">
                        <BsArrowRight />
                        <span>Search Engine</span>
                    </div>
                </div>
            </div>

            <div className="lets-start">
                <span className='blue-text underline'>Hot Topic!</span>
                <div className="sections">
                    <div className="hex-image">1</div>
                    <div className="hex-image">2</div>
                    <div className="hex-image">3</div>
                </div>
            </div>

        </div>
    )
}