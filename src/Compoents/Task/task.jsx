import { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { useAuth } from '../../Hooks/useAuth';
import { Timer } from '../Timer/Timer';
import { TaskBox } from './style';

export function Task({ task }) {
  const [playStatus, setPlayStatus] = useState(false);
  const { user } = useAuth();

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
        <Timer userId={user.id} taskId={task._id}/>
      </div>
    </TaskBox>
  );
}
