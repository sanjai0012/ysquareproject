import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [running, setRunning] = useState(false);

  const formatTime = (milliseconds) => {
    const date = new Date(milliseconds);
    return date.toISOString().substr(11, 8);
  };

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setCurrentTime(Date.now() - startTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running, startTime]);

  const startStopwatch = () => {
    if (!running) {
      setStartTime(Date.now() - currentTime);
      setRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (running) {
      setRunning(false);
    }
  };

  const resetStopwatch = () => {
    setRunning(false);
    setCurrentTime(0);
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch">{formatTime(currentTime)}</div>
      <div className="buttons">
        <button className='btn btn-primary ' onClick={startStopwatch} disabled={running}>
          Start
        </button>
        <button className='btn btn-danger' onClick={stopStopwatch} disabled={!running}>
          Stop
        </button>
        <button className='btn btn-primary' onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
