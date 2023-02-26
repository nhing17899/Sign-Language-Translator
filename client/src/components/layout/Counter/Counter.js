import { FaMedapps, FaHeart, FaStar } from 'react-icons/fa';
import CountUp from 'react-countup';


import './Counter.css';

function Counter() {
    return (
        <div className='main'>
            <h1 className='title'>
                Why travel with My Easy Rider            
            </h1>
            <div className='content'>
                <div className="box">
                    <div className='icon'><FaHeart size='4em' color='#ffc800ca' /></div>
                    <CountUp className='counter' start={0} end={100} duration={2.75} />
                    <div className='text'>Happy Users</div>
                </div>
                <div className="box">
                    <div className='icon'><FaMedapps size='4em' color='#ffc800ca' /></div>
                    <CountUp className='counter' start={0} end={200} duration={2.75} />
                    <div className="text">Common Topics</div>
                </div>
                <div className="box">
                    <div className="icon"><FaStar size='4em' color='#ffc800ca' /></div>
                    <CountUp className="counter" start={0} end={4.5} duration={2.75} />
                    <div className="text">Rating</div>
                </div>
            </div>
        </div>
    )
}

export default Counter;