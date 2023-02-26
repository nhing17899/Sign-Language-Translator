import './Card.css';

function Card(props) {
    const  {topic} = props;
    const exploreLink = '/tours/';

    return (
        <a href={exploreLink}>
            <li className="item">
                <div className="box"> 
                    <div className="boxImgDiv">
                        <img className="boxImg" src={topic} alt={topic.topic} />
                        <div className="bgText">{topic}</div>
                    </div>

                    <div className="actions hide">
                        <button link={exploreLink}>
                            <span> Explore Tour </span>
                        </button>
                    </div>
                </div>
            </li>
        </a>

    )
}

export default Card;