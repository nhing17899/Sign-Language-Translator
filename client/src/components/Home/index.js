import React from 'react';
import './Home.css';
import { BsArrowRight } from 'react-icons/bs';
import Slider from '../ui/Slider/Slider';
import Image from '../ui/Image/Image';
import Counter from '../layout/Counter/Counter';

export default function HomePage(props) {
    const imageUrl = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuPk3eO9hEBmHXWEIyupoAqoSwK8vPwVh5L1d3N18RJJK7wbi6qNI_SmYryqAbJio7jA&usqp=CAU",
    ];

    return (
        <div className='home-page'>
            <div className="mission-statement">
                <div className='blue-text'>
                    Mission Statement
                </div>
                
            </div>

            <div className="topics">
                <span className='blue-text'>Various Topics</span>
                <div className="pictures">
                    {imageUrl.map(url => <Image
                        src={url}
                        caption="Image 1"
                    />)}
                </div>
            </div>

            <Counter />

            <div className='common-sign'>
                <div className='blue-text'>Common Signs</div>
                <Slider
                    title=""
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
                <span className='blue-text'>Hot Topic!</span>
                <div className="sections">
                    <div className="hex-image">1</div>
                    <div className="hex-image">2</div>
                    <div className="hex-image">3</div>
                </div>
            </div>

        </div>
    )
}