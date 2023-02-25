import React from 'react';
import './Home.css';

export default function HomePage() {
    return <div>
        <div className='container'>
            <textarea 
                placeholder='Type here'
                style={{width: '50%'}}
            />

            <div className='right'></div>
        </div>
    </div>
}