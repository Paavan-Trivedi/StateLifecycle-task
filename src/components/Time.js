import React, { useState } from 'react'
import './time.css';

export default function Time() {

    let timer = new Date().toLocaleTimeString();

    const [curTime, setCurTime] = useState(timer);

    const updateTime = () => {
        timer = new Date().toLocaleTimeString();
        setCurTime(timer)
        
    }

    setInterval(updateTime, 1000);

  return (
    <div className='clk'>
       <h1>{curTime}</h1>
    </div>
  )
}