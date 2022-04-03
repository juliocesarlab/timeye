import { useStopwatch } from 'react-timer-hook';
import { useEffect } from 'react';
import { saveDate } from '../../services/api';
export function Timer({ userId, taskId }) {

  useEffect(() => {
    (async () => {
      
    })()
  }, [])

  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  async function pauseAndSave() {
    const timeUsed = new Date();
    timeUsed.setHours(hours, minutes, seconds);
    const response = await saveDate(userId, taskId, timeUsed);
    console.log(response);
  }

  return (
    <>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      <button onClick={start}>Start</button>
      <button onClick={pauseAndSave}>Pause</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
