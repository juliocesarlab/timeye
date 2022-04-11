import { useEffect, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { useStopwatch } from 'react-timer-hook';
import { saveDate } from '../../services/api';

export function Timer({ userId, taskId, timeSpent }) {
  const dateFrom = new Date(timeSpent);
  const hoursToSec = dateFrom.getUTCHours() * 60 * 60;
  const minutesToSec = dateFrom.getUTCMinutes() * 60;
  const defaultSeconds = dateFrom.getUTCSeconds();

  const timerSecondsOffset = hoursToSec + minutesToSec + defaultSeconds;

  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + timerSecondsOffset);

  const [playStatus, setPlayStatus] = useState(false);

  function handlePlayStatus() {
    setPlayStatus(!playStatus);
    !playStatus ? start() : pauseAndSave();
  }

  const { seconds, minutes, hours, isRunning, start, pause } = useStopwatch({
    offsetTimestamp: stopwatchOffset,
  });

  //Verify if hour is greather than 18:pm when hours variable changes

  useEffect(() => {
    isRunning && new Date().getHours() >= 18 ? pauseAndSave('forcePause') : '';
  }, [hours]);

  async function pauseAndSave(forcePause) {
    forcePause ? setPlayStatus(!playStatus) : '';
    try {
      pause();
      const timeUsed = new Date();
      timeUsed.setHours(hours - 3, minutes, seconds, 0); //last is ms
      const response = await saveDate(userId, taskId, timeUsed);
    } catch (e) {
      return e;
    }
  }

  return (
    <div className="clock">
      <span className="play-btn" onClick={handlePlayStatus}>
        {playStatus ? <BsPauseFill /> : <BsFillPlayFill />}
      </span>
      <div className="timer">
        <span>{hours < 10 ? `0${hours}` : hours}</span>:
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}
