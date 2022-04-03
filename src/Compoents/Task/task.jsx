import { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { TaskBox } from './style';

export function Task({ task }) {
  const [playStatus, setPlayStatus] = useState(false);

  function handlePlayStatus() {
    setPlayStatus(!playStatus);
  }

  return (
    <TaskBox>
      <div className="main-info">
        <h3 key={task._id}>{task.name}</h3>
        <span className="play-btn" onClick={handlePlayStatus}>
          {playStatus ? <BsPauseFill /> : <BsFillPlayFill />}
        </span>
      </div>
    </TaskBox>
  );
}
