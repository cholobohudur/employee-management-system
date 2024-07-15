import React, { useState, useEffect } from 'react';

const Timer = ({ working }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let interval = null;
    if (working) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        }
        if (minutes === 59) {
          setMinutes(0);
          setHours((prevHours) => prevHours + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [working, seconds, minutes, hours]);

  return (
    <div>
      {working && (
        <div>
          <h3>Time Elapsed</h3>
          <p>{hours} hours : {minutes} minutes : {seconds} seconds</p>
        </div>
      )}
    </div>
  );
};

export default Timer;
