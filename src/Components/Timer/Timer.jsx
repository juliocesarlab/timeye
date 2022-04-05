import { useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { useStopwatch } from 'react-timer-hook';
import { saveDate } from '../../services/api';

export function Timer({ userId, taskId, timeSpent }) {
  const dateFrom = new Date(timeSpent);
  console.log(dateFrom.getUTCSeconds());
  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(
    stopwatchOffset.getSeconds() + dateFrom.getSeconds()
  );

  const [playStatus, setPlayStatus] = useState(false);
  function handlePlayStatus() {
    setPlayStatus(!playStatus);
    !playStatus ? start() : pauseAndSave();
  }

  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ offsetTimestamp: stopwatchOffset });

  async function pauseAndSave() {
    pause();
    const timeUsed = new Date();
    timeUsed.setHours(hours - 3, minutes, seconds);
    const response = await saveDate(userId, taskId, timeUsed);
  }

  return (
    <div className="clock">
      <span className="play-btn" onClick={handlePlayStatus}>
        {playStatus ? <BsPauseFill /> : <BsFillPlayFill />}
      </span>
      <span onClick={reset}>
        <BiRefresh />
      </span>
      <div className="timer">
        <span>{hours < 10 ? `0${hours}` : hours}</span>:
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}
