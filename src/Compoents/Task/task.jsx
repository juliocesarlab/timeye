import { useAuth } from '../../Hooks/useAuth';
import { Timer } from '../Timer/Timer';
import { TaskBox } from './style';

export function Task({ task }) {
  const { user } = useAuth();

  return (
    <TaskBox>
      <div className="main-info">
        <h3 key={task._id}>{task.name}</h3>
        <Timer userId={user.id} taskId={task._id} timeSpent={task.timeSpent} />
      </div>
    </TaskBox>
  );
}
