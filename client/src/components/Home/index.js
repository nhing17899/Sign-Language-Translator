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

    const hotTopicUrl =[
        ['https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80', 'Family'],
        ['https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80', 'Emotion'],
        ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80', 'Food'],
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
                <p>Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively.</p>
                <div className="pictures">
                    {imageUrl.map(url => <Image
                        src={url}
                        caption="Image 1"
                    />)}
                </div>
            </div>

            <Counter />

            <div className='common-sign'>
                <div className='content-left'>
                    <Slider
                        title=""
                        imagesUrl={imageUrl}
                    />
                </div>
                <div className='content-right'>
                    <div className='blue-text'>Common Signs</div>
                    <div className='paragraph'>
                        Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.
                        Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to.
                    </div>
                </div>
            </div>

            <div className="hot-topic">
                <span className='blue-text'>Hot Topics!</span>
                <div className="sections">
                    {hotTopicUrl.map(topic => 
                        <div>
                            <div className="hex-image">
                                <img
                                    className='hex'
                                    src={topic[0]}
                                    alt="Hot topic"
                                    />
                            </div>
                            <div className='topic-caption'>{topic[1]}</div>
                        </div>
                    )}
                    
                </div>
            </div>

                        
            <div className="lets-start">
                <div className='blue-text'>Let's Get Started!</div>
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
        </div>
    )
}