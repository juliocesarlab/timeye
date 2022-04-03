import { useStopwatch } from 'react-timer-hook';
import { saveDate } from '../../services/api';
export function Timer({ userId, taskId, timeSpent }) {
  const dateFrom = new Date(timeSpent);
  console.log(dateFrom.getUTCSeconds());
  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(
    stopwatchOffset.getSeconds() + dateFrom.getSeconds()
  );

  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ offsetTimestamp: stopwatchOffset });

  async function pauseAndSave() {
    pause();
    const timeUsed = new Date();
    timeUsed.setHours(hours, minutes, seconds);
    const response = await saveDate(userId, taskId, timeUsed);
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
