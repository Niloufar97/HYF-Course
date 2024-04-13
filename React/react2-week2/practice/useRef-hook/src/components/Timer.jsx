import { useState, useRef } from 'react'

function Timer() {
    const [timeStart, setTimeStart] = useState(0);
    const [now, setNow] = useState(null);
    const timerRef = useRef(null)
  
    const startTimer = () => {
      setTimeStart(Date.now())
      
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    }
    const stopTimer = () => {
      clearInterval(timerRef.current)
    }
    let secondsPassed = 0;
    if (timeStart != null && now != null) {
      secondsPassed = (now - timeStart) / 1000;
    }
  return (
    <div>
       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>stop</button>
    </div>
  )
}

export default Timer
