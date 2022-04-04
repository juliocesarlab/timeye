import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useAuth } from '../../Hooks/useAuth';
import { deleteTask, updateTaskName } from '../../services/api';
import { Timer } from '../Timer/Timer';
import { TaskBox } from './style';

export function Task({ task, taskList, setTaskList }) {
  const { user } = useAuth();
  const [taskName, setTaskName] = useState(task.name);
  const [deleteAnimate, setDeleteAnimate] = useState(false);

  async function handleTaskName() {
    const response = await updateTaskName(taskName, user.id, task._id);
    console.log(response);
  }

  async function handleDeleteTask() {
    const response = await deleteTask(user.id, task._id);
    setDeleteAnimate(true);
    setTimeout(() => removeTaskFromDom(task._id), 300);
  }

  function removeTaskFromDom(taskId) {
    taskList.forEach(task => console.log(task._id == taskId));
    const filteredTasks = taskList.filter(task => task._id != taskId);
    console.log(filteredTasks);
    setTaskList(filteredTasks);
  }

  return (
    <TaskBox className={deleteAnimate ? 'delete-animate' : ''}>
      <div className="main-info">
        <input
          type="text"
          id={task._id}
          key={task._id}
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          onBlur={handleTaskName}
        />
        <Timer userId={user.id} taskId={task._id} timeSpent={task.timeSpent} />
      </div>
      <div className="options">
        <span className="delete-btn" onClick={handleDeleteTask}>
          <AiFillDelete />
        </span>
      </div>
    </TaskBox>
  );
}
